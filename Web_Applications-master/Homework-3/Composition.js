function StrategyPlayer(name, LookAtPreviousMoveStrategy){
		this.name = name;
		this.LookAtPreviousMoveStrategy = LookAtPreviousMoveStrategy;
		this.moves = [];
		this.recordOpponentMove = [];
}

//move method //
StrategyPlayer.prototype.move = function(){
	var move = this.LookAtPreviousMoveStrategy.getNextMove(this.recordOpponentMove);
	this.moves.push(move);
	return move;
}

//record opponent move method
StrategyPlayer.prototype.recordOpponentMoves = function(opponentMove){
	this.recordOpponentMove.push(opponentMove);
};

function LookAtPreviousMoveStrategy(){}

//get next move based upon the array of moves
LookAtPreviousMoveStrategy.prototype.getNextMove = function(arr){
	var lastmove = arr[arr.length-1];
	var move, random_move;
	var random_number = Math.floor(Math.random() * 3) + 1;
	switch (random_number) {
		case 1:
			random_move = 'R';
			break;
		case 2:
			random_move = 'P';
			break;
		case 3:
			random_move = 'S';
			break;
	}
	switch (lastmove) {
		case "R":
			move = 'P';
			break;
		case "S":
			move = 'R';
			break;
		case "P":
			move = 'S';
			break;
		default: 
			move = random_move;
	}

	return move;
}
var arr = [];
var player1 = new StrategyPlayer('player1', new LookAtPreviousMoveStrategy());
console.log('---------');
console.log(player1.name + ' first move should be random:' + player1.move());
player1.recordOpponentMoves('R');
console.log('If her last opponents move was rock, shell play paper: ' + player1.move());
player1.recordOpponentMoves('P');
console.log('If her last opponents move was paper, shell play scissors: ' + player1.move());
console.log('All of ' + player1.name + ' moves so far '  + player1.moves);
console.log('All of her opponents moves so far: ' + player1.recordOpponentMove);






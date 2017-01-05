//constructor
function player(name){
	this.name = name;
	this.moves = []
	this.opponentMoves = [];
};
//method 
//created from the player constructor
//only move is rock
player.prototype.move = function(){
	var move = 'R';
	this.moves.push(move);
	return move;
};
//getNextMove method
//may need this move or not
player.prototype.getNextMove = function(){

}
//record opponent last move
player.prototype.recordOpponentMove = function(opponentMove){
	this.opponentMoves.push(opponentMove);
}
//create the HistoryRepeatsItselfPlayer
//should inherit from player
function HistoryRepeatsItselfPlayer(element){
	player.call(this, element);
}
console.log('---------');
//creating the instance of Player
var player1 = new player('Nancy');
console.log('Normal ' + player1.name);
console.log('---------');
console.log(player1.name + ' always plays ' + player1.move());
console.log('Nancy always plays rock, regardless of her opponents last move: ' + player1.move());
console.log('All of ' + player1.name + 's moves so far: ' + player1.moves);
console.log('All of her opponents moves so far: ' + player1.opponentMoves);
console.log('\n...\n');
//creating an instance of HistoryRepeatsItselfPlayer
HistoryRepeatsItselfPlayer.prototype = Object.create(player.prototype);
//redefine the move method for the HistoryRepeatsItselfPlayer
HistoryRepeatsItselfPlayer.prototype.move = function(){
	var opponent_move = this.opponentMoves[this.opponentMoves.length-1];
	var p_move;
	if(opponent_move === 'R'){
		p_move = 'P';
		this.moves.push(p_move);
		return p_move;
	}
	if(opponent_move === 'S'){
		p_move = 'R';
		this.moves.push(p_move);
		return p_move;
	}
	if(opponent_move === 'P'){
		p_move = 'S';
		this.moves.push(p_move);
		return p_move;
	}
	var random_number = Math.floor(Math.random() * 3) + 1;
	if(random_number == 1){
		p_move = 'P';
		this.moves.push(p_move);
		return p_move;
	}else if(random_number == 2){
		p_move = 'R';
		this.moves.push(p_move);
		return p_move;
	}else
		p_move = 'S';
		this.moves.push(p_move);
		return p_move;
}
var player2 = new HistoryRepeatsItselfPlayer('Tabitha');
console.log('Timely Tabitha');
console.log('------');
console.log(player2.name + ' first move should be random: ' + player2.move());
player2.recordOpponentMove('R');
console.log('If her last opponent move was rock, shell play paper: ' + player2.move());
player2.recordOpponentMove('P');
console.log('If her last opponent move was paper, shell play scissors: ' + player2.move());
console.log('All of ' + player2.name + ' moves so far: ' + player2.moves);
console.log('All of her opponents moves so far: ' + player2.opponentMoves);





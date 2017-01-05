var readlineSync = require('readline-sync');
//
function generateCards(){
	var deck = [];
	var deckSuit;
	for(var j = 0; j < 4; j++){
		if(j == 0){
			deckSuit = '♠';
		}else if(j == 1){
			deckSuit = '♥';
		}else if(j == 2){
			deckSuit = '♦';
		}else if(j == 3){
			deckSuit = '♣';
		}
		for(var i = 2; i <15; i++){
			var card = i;
			if(card == 11){
				card  = 'J';
			}else if( card == 12){
				card  = 'Q';
			}else if( card == 13){
				card  = 'K'
			}else if( card == 14){
				card  = 'A';
			}
			deck.push({ suit: deckSuit, face: card});
		}
	}
	return deck;
}

function shuffle(array){
	var deck = [];
	var temp;
	for(var i = 51; i >= 0; i--){
		temp = Math.floor(Math.random() * i);
		deck.push(array[temp]);
		array.splice(temp,1);
	}
	return deck;
}

function calculateHand(array){
	var length = array.length;
	var hand = 0;
	var card; var aceCounter = 0;
	for(var i = 0; i < length; i++){
		card = array[i].face;
		if(card == 'J' || card == 'Q' || card == 'K'){
			hand += 10;
		}else if(card == 'A'){
			aceCounter+=1;
			hand += 11;
			if(hand > 21){
				hand -= 10;
				aceCounter -= 1;
				if(aceCounter > 0){
					while(hand > 21 && aceCounter > 0){
						aceCounter -= 1;
						hand -= 10;
					}
				}
			}
		}else
			hand += card;
	}
	return hand;
}

function determineWinner(player, Computer){
	var string;
	if(player > 21){
		player = 0;
	}
	if(Computer > 21){
		Computer = 0;
	}
	if(player > Computer){
		string = 'Player';
		return string
	}else if(Computer > player){
		string = 'Computer';
		return string;
	}else
		string = 'Tie'
		return string;
}

function game(){
	var deck = shuffle(generateCards());
	var player = [];
	var Computer = [];
	var deckCount = 52;
	for(var i = 0; i < 2; i++){
			player.push(deck[0]);
			deck.splice(0,1);
			Computer.push(deck[0]);
			deck.splice(0,1);
			deckCount -= 2;
	}
	while(true){
		while(true){
			console.log('Your hand is: ', player, calculateHand(player));
			if(calculateHand(player) > 21){
				break;
			}			
			var letter = readlineSync.question('type h to (h)it or s to (s)tay: ');
			if(letter == 'h'){
				player.push(deck[0]);
				deck.splice(0,1);
				deckCount--;
			}else if(letter == 's'){
				break;
			}
		}
		while(true){
			console.log('Computer hand is: ',Computer, calculateHand(Computer));
			console.log(calculateHand(Computer));
			if(calculateHand(Computer) > 17){
				break;
			}
			Computer.push(deck[0]);
			deck.splice(0,1);
			deckCount--;
		}
		var winner = determineWinner(calculateHand(player),calculateHand(Computer));
		console.log(winner, 'Wins');
		console.log('There are ', deckCount, ' cards left in the deck');
		if(deckCount <= 26){
			break;
		}
		player.splice(0,player.length);
		Computer.splice(0,Computer.length);
		for(var i = 0; i < 2; i++){
			player.push(deck[0]);
			deck.splice(0,1);
			Computer.push(deck[0]);
			deck.splice(0,1);
			deckCount -= 2;
		}
		
	}
	console.log('Game Over');
}
game();

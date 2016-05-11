// $(document).ready(function() {
// window.onload = function(){
var deal = document.getElementById('dealButton');
deal.addEventListener("click", function(){
	shuffle(deck);
	cardDeals();
	console.log('click')
})

var hit = document.getElementById('hitButton');
hit.addEventListener('click', function(){
	cardOne();
	console.log('slick')
})

var stand = document.getElementById('standButton');
stand.addEventListener("click", function(){
	standing();
	console.log('snickers')
})

var player = {
	name: " ",
	current: [],
	values: function(){
		var totale = 0;
		for (var a = 0; a < player.current.length; a++) {
			totale += player.current[a].value;
		}
		return totale
		// console.log(totale);
	}
};

// console.log(player.values());
// console.log(player.values());

var computer = {
	name: "Mr.Bames Jond",
	current: [],
	values: function(){
		var total = 0;
		for (var a = 0; a < computer.current.length; a++){
			total += computer.current[a].value;
		}	
		return total
	}
};
var values =[1,2,3,4,5,6,7,8,9,10,10,10,10];
var suits =["diamond", "clover", "heart","spade"];
var names =["Ace", "Two", "Three", "Four", "Five", "Six", "Seven","Eight","Nine","Ten","Jack", "Queen", "King"];

var deck = []; //empty array


var makeCards = function(){ 
	for (var i=0; i<values.length; i++){ // loops thru so that suits goes in each value
		for (var a=0; a<suits.length; a++) { // loops thru so that we get 52 cards
			var card = { value: "", suit: "", name:"" }; // card object contains keys with empty values
			card.value = values[i];// number values goes into each card value
			card.suit = suits[a]; // suits values goes into each card suit
			card.name = names[i]; // name values goes into each card name
			deck.push(card); // now card contains a total of 52 card name, suites and values that is placed into the empty deck arrat
		}
	}
}

makeCards();
var shuffle = function(o) {
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
}; // function to randomly shuffle deck
shuffle(deck);
console.log(deck);


// console.log(distribute);

var cardDeals = function(){
		var card1 = deck.pop(0);
		var card2 = deck.pop(0);
		var card3 = deck.pop(0);
		var card4 = deck.pop(0);
		player.current.push(card1, card2);
		console.log(player);
		computer.current.push(card3, card4);
		console.log(computer);
	}


var cardOne = function(){
	console.log(deck);
	player.current.push(deck.pop());
	console.log(player);
	computer.current.push(deck.pop());
	console.log(computer);
}

var standing = function(){
	console.log(player);
	console.log(computer);
	console.log(player.values());
	console.log(computer.values());
	if (player.values() < computer.values()){
		return("Player wins")
	} else if (computer.values() < player.values()){
		return ("Computer Wins")
	}
	console.log(standing());
}
// 	for(var a = 0; a < player.current.length; a++) {
// 		player.current[a]
// 	if {
// 		player.current // take the current hand, call for the array value and add the value 
// 	}
// }//turned off fam
//have cards with values 
// 4 ones = 1ea or 11ea, 4 twos, 4 threes, 4 fours, 4 fives, 4 sixs, 4 sevens, 4 eights, 4 nines, 4 tens, 4 jacks = 10ea., 4 queens = 10ea., 4 kings = 10ea. 
// is there a simpler way?
// var deck = {
// diamondace: 1,
// diamondtwo: 2,
// diamondthree: 3,
// diamondfour: 4,
// diamondfive: 5,
// diamondsix: 6,
// diamondseven: 7,
// diamondeight: 8,
// diamondnine: 9,
// diamondten: 10,
// diamondjack: 10,
// diamondqueen: 10,
// diamondking: 10,
// cloverace: 1,
// clovertwo: 2,
// cloverthree: 3,
// cloverfour: 4,
// cloverfive: 5,
// cloversix: 6,
// cloverseven: 7,
// clovereight: 8,
// clovernine: 9,
// cloverten: 10,
// cloverjack: 10,
// cloverqueen: 10,
// cloverking: 10,
// heartace: 1,
// hearttwo: 2,
// heartthree: 3,
// heartfour: 4,
// heartfive: 5,
// heartsix: 6,
// heartseven: 7,
// hearteight: 8,
// heartnine: 9,
// heartten: 10,
// heartjack: 10,
// heartqueen: 10,
// heartking: 10,
// spadeace: 1,
// spadetwo: 2,
// spadethree: 3,
// spadefour: 4,
// spadefive: 5,
// spadesix: 6,
// spadeseven: 7,
// spadeeight: 8,
// spadenine: 9,
// spadeten: 10,
// spadejack: 10,
// spadequeen: 10,
// spadeking: 10
// };
// console.log(deck);
// player { name: '', cardTotal: cardvalues();}

// put cards in array, key  = card & val = card corresponding value
// var getcardvalue = function(){}
// 
// randomselector; function that randomizes object values in deck
// var randomCard = function(obj){
// 	var keys = Object.keys(obj)
// 	return obj[keys[ keys.length * Math.random() <<0]];
// 	distribute();
// };

// // distribute 2 cards to dealer and player
// var distribute = function(){ 
// 	var n = Math.floor(Math.random());
// 	var v = deck.splice(n, 4);
// 	console.log(v)
// 	start();
// };

// var start = function(){
// 	distribute(randomCard);
// }


// use randomCard, math.Random a value to splice
// return splice
// append value to a div
	// splice two cards for player

//randomCard()? // call for random card then distribute?
// splice?
// card value + together = ? 
// var cardvalues = function {
	// } distribute() and add values , set as arrays for distribute?? a loop fx?
// var distrubuteHit = function(){
// call shuffle() and get one key/value}


// player chooses to stand or hit
// player stands; dealer shows added card values, if 21<=(dealers hand > player hands) , dealer wins, reset reshuffle,
// var playerstands = function(){
// click stand button function(){
//	while (cardvalues <= 21)
// if player.cardvalues > dealer.cardvalues, player wins round
// else dealer.cardvalues = 21 , dealer wins
// else if  dealer.cardvaues > player.cardvalues, dealer wins}}
// reset

// player hit; player hit...add value, chooses to hit or stand, if stand, see line 11
// if hit, will continue to add value until value > 21 or line 11
// var playerhit = function(){ 
//click hit button function(){
// distributeHit, then cardvalues loop }}
//
//optional
//each player starts out with 50 points/score,
//each round costs 5 points
// winner of round gets 5 points added onto current points/score
// first to hit zero, game over and game restarts

// }); 
// Garbage //
// var shuffle = function(o) {
// 	var j, x, i;
// 	for(i = o.length; i; i -= 1){
// 		j = Math.floor(Math.random() * i);
// 		x = o[i - 1];
// 		o[i - 1] = o[j];
// 		o[j] = x;	
// 		return o;
// 	}		
// };
// ** Doesnt work because its takes in arrays and deck is object **

// shuffle(deck);
// ** does that same thing as randomcard()  **
// var tmpList = Object.keys(deck);
// var randomPropertyName = tmpList[Math.floor(Math.random()*tmpList.length)];
// var propertyValue = deck[randomPropertyName];
// ** applies to arrays **
// var randomCard = deck[Math.floor(Math.random() * deck.length)];

// *innerHTML might just need text and not an array value**
// cardpop
// 		var pEach = document.createElement('p'); // creates par
// 		var cardOne = deck.pop[v];
// 		pEach.innerHTML = []; // inside the text should display suit & values 
// 		(pEach.innerHTML).push(cardOne);// place the par into userCards
// 	}
// }
// cardOne
// ** would not want to store objects into div **
// var giveUser = document.getElementsByClassName('userCard'); // gets userCard 	
//for (var e = 0; e < player.current.length; e++) {  // loops to distribute cardpop
		// need to distribute a cardpop into the class giveUser twice (aka v for loops)
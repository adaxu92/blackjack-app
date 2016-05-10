$(document).ready(function() {

//have cards with values 
// 4 ones = 1ea or 11ea, 4 twos, 4 threes, 4 fours, 4 fives, 4 sixs, 4 sevens, 4 eights, 4 nines, 4 tens, 4 jacks = 10ea., 4 queens = 10ea., 4 kings = 10ea. 
// is there a simpler way?
var deck = {
diamondace: 1,
diamondtwo: 2,
diamondthree: 3,
diamondfour: 4,
diamondfive: 5,
diamondsix: 6,
diamondseven: 7,
diamondeight: 8,
diamondnine: 9,
diamondten: 10,
diamondjack: 10,
diamondqueen: 10,
diamondking: 10,
cloverace: 1,
clovertwo: 2,
cloverthree: 3,
cloverfour: 4,
cloverfive: 5,
cloversix: 6,
cloverseven: 7,
clovereight: 8,
clovernine: 9,
cloverten: 10,
cloverjack: 10,
cloverqueen: 10,
cloverking: 10,
heartace: 1,
hearttwo: 2,
heartthree: 3,
heartfour: 4,
heartfive: 5,
heartsix: 6,
heartseven: 7,
hearteight: 8,
heartnine: 9,
heartten: 10,
heartjack: 10,
heartqueen: 10,
heartking: 10,
spadeace: 1,
spadetwo: 2,
spadethree: 3,
spadefour: 4,
spadefive: 5,
spadesix: 6,
spadeseven: 7,
spadeeight: 8,
spadenine: 9,
spadeten: 10,
spadejack: 10,
spadequeen: 10,
spadeking: 10
};
console.log(deck);
// player { name: '', cardTotal: cardvalues();}

// put cards in array, key  = card & val = card corresponding value
// var getcardvalue = function(){}
// 
// randomselector; function that randomizes object values in deck
var randomCard = function(obj){
	var keys = deck.keys(obj)
	return obj[keys[ keys.length * Math.random() <<0]];
};


// distribute 2 cards to dealer and player
// var distribute = function(){
// 	} randomCard()? // call for random card then distribute?
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

}) 
// Garbage //

// ** Doesnt work because its takes in arrays and deck is object **
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
// shuffle(deck);
// ** does that same thing as randomcard()  **
// var tmpList = Object.keys(deck);
// var randomPropertyName = tmpList[Math.floor(Math.random()*tmpList.length)];
// var propertyValue = deck[randomPropertyName];
// ** applies to arrays **
// var randomCard = deck[Math.floor(Math.random() * deck.length)];

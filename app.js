// $(document).ready(function() {
// window.onload = function(){

// Button that will deal and shuffle cards when clicked
var deal = document.getElementById('dealButton'); 
deal.addEventListener("click", function(){
	shuffle(deck);
	cardDeals();
})

// Button that will give one card to player & dealer when clicked
var hit = document.getElementById('hitButton');
hit.addEventListener('click', function(){
	cardOne();	
})

//Button that will company values & win conditions to reveal the winner when clicked
var stand = document.getElementById('standButton');
stand.addEventListener("click", function(){
	standing();
})

//=====================
var player = {
	name: " ",
	current: [], // possesses the current hand of player
	values: function(){  // posseses the added number value of player's hand
		var totale = 0;
		for (var a = 0; a < player.current.length; a++) {
			totale += player.current[a].value;
		} if (totale > 21) { // if the value is greater than 21, than player bust and loses
			alert("Bust! " + player.name + " Loses.")
		} return totale
	}
};

// has a prompt to enter player's name
player.name = askPlayer();
function askPlayer(){
	var name = prompt("Enter Your Name:")
	return name
}

//=====================
var computer = {
	name: "Mr.Bames Jond", 
	current: [],
	values: function(){
		var total = 0;
		for (var a = 0; a < computer.current.length; a++){ // if computer's added value is above 21, computer busts & player wins
			total += computer.current[a].value;
		} if (total > 21) {
			alert("Bust! Dealer Loses.")
		} return total
	}
};

//====== Array of values, suits and names to be stored as object values in the deck array
var values =[1,2,3,4,5,6,7,8,9,10,10,10,10];
var suits =["diamond", "clover", "heart","spade"];
var names =["Ace", "Two", "Three", "Four", "Five", "Six", "Seven","Eight","Nine","Ten","Jack", "Queen", "King"];

var deck = []; 

//=========Places each suits value into the names and number value to generate 52 cards
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

//========Using the for loop, it will shuffle the array and object values in deck
makeCards();
var shuffle = function(o) {
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
};
shuffle(deck);
// console.log(deck);

//=========function to deal two hands for player and computer when clicked
var cardDeals = function(){
	var getBC = document.getElementById('container'); // overall id that houses all divs
	var getCon = document.createElement('div');
	getCon.id = 'userContainer';//place to store each card
	getBC.appendChild(getCon); // storing the newly created card div into the overll div container
	for(var d = 0; d <= 1; d++){
		var playDiv = document.createElement('div');  // creating div to hold player's current hand
		var playDeal = player.current.push(deck.pop([d])); // will create/hold two cards as player's current hand
		playDiv.className = 'userCard'; // stored in a div class called userCard
		playDiv.setAttribute('data-value', playDeal);
		getCon.appendChild(playDiv); // and appending it into the userContainer
	}
	var getKon = document.createElement('div');
	getKon.id = 'dealerContainer';// a place to store each card
	getBC.appendChild(getKon); 
	for (var q = 0; q <= 1; q++){
		var comDiv = document.createElement('div'); // creating a div to hold computer's current hand
		var compDeal = computer.current.push(deck.pop([d])); // will create/hold two cards as computer's hand
		comDiv.className = 'dealerCard';
		comDiv.setAttribute('data-value', compDeal);
		getKon.appendChild(comDiv); // appending the newly created divs with class of dealerCard into dealerContainer
	}
	console.log("=====Player's Hand======"); // shows the player's two cards and its added number value
	console.log(player.current[0]); 
	console.log(player.current[1]);
	console.log(player.name + "'s Total: "  + player.values());
	}

//====================
var cardOne = function(){
	var getBC = document.getElementById('userContainer'); // essentially using the same codes before to create a div each time hit is clicked
	var getCon = document.createElement('div');
	getCon.id = 'userContainer';
	getBC.appendChild(getCon);
	for(var r = 0; r < 1; r++){ 
		var playDiv = document.createElement('div');// it will continously pop out one card when hit to the players hand
		var playDeal = player.current.push(deck.pop([r]));
		playDiv.className = 'userCard';
		playDiv.setAttribute('data-value', playDeal);
		getCon.appendChild(playDiv);
	}
	var getKon = document.createElement('div');
	getKon.id = 'dealerContainer';
	getBC.appendChild(getKon);
	for (var y = 0; y < 1; y++){
		var comDiv = document.createElement('div'); // computer will continuously hit as player hits too
		var compDeal = computer.current.push(deck.pop([y]));
		comDiv.className = 'dealerCard';
		comDiv.setAttribute('data-value', compDeal);
		getKon.appendChild(comDiv);
	}
	alert('HIT!');  // Alerting player that they have chosen to hit
	console.log("=====Player's Hand======"); // showing the current card value numbers with the added card's number value included
	console.log(player.current);
	console.log("Total: " + player.values());
}

//=========Player chooses to stand and now check who is the winner
var standing = function(){
	console.log(player.values()); // reveals the player added number value
	console.log(computer.values()); // reveals the computer added number value
	if (player.values() > computer.values()){ // if player's total is greater than computer, then player wins
		alert(player.name + " wins!"); // alert to tell player they've won. *note = if player hand is greater 21, an alert to say they bust occured on line 31
	}
	else if (player.values() < computer.values() < 21){ // if computer total is greater than player but less than or equal to 21 (line 52), computer wins
		alert("Dealer wins!");
	}
	else if (player.values() === computer.values()){ // if both totals are identical, tie is alerted
		alert("Tie");
	}
	else if (computer.values === 21){ // if computer has a total of 21, they automatically win
		alert("Black Jack! Dealer wins!")
	}
	else{ // let's see what bug occurs
		return("umm.. you've broke thru the 4th dimension.");
	}
}


//======================== Thought Process ==========================
// 4 ones = 1ea or 11ea, 4 twos, 4 threes, 4 fours, 4 fives, 4 sixs, 4 sevens, 4 eights, 4 nines, 4 tens, 4 jacks = 10ea., 4 queens = 10ea., 4 kings = 10ea. 
// is there a simpler way?
// arrays.
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

// ===========================|||Garbage|||=================================
// =========================Changing to Arrays==============================
//var deck = {
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
//========================Function doesnt shuffle==========================
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
// =======Doesnt work because its takes in arrays and deck is object========
// shuffle(deck);
// ** does that same thing as randomcard()  **
// var tmpList = Object.keys(deck);
// var randomPropertyName = tmpList[Math.floor(Math.random()*tmpList.length)];
// var propertyValue = deck[randomPropertyName];
// ============================applies to arrays ===========================
// var randomCard = deck[Math.floor(Math.random() * deck.length)];

// ========innerHTML might just need text and not an array value============
// cardpop
// 		var pEach = document.createElement('p'); // creates par
// 		var cardOne = deck.pop[v];
// 		pEach.innerHTML = []; // inside the text should display suit & values 
// 		(pEach.innerHTML).push(cardOne);// place the par into userCards
// 	}
// }
// =================would not want to store objects into div================
// var giveUser = document.getElementsByClassName('userCard'); // gets userCard 	
//for (var e = 0; e < player.current.length; e++) {  // loops to distribute cardpop
// need to distribute a cardpop into the class giveUser twice (aka v for loops)	
// ===============================doesnt reset==============================
// document.getElementById('form').reset();		
// document.getElementById('myform').reset();	
//  ============================wet, created a drier function ==============
// var card1 = deck.pop(0);
// var card2 = deck.pop(0);
// var card3 = deck.pop(0);
// var card4 = deck.pop(0);
// player.current.push(card1, card2);
// computer.current.push(card3, card4);
// console.log("=====Player's Hand======");
// console.log(player.current[0]);
// console.log(player.current[1]);
// console.log("Total: " + player.values());
// console.log("====Computer's Hand====");
// console.log(computer.current[0]);
// console.log(computer.current[1]);
// console.log("Total: " + computer.values());	getCon.innerHTML = " "
// ===========================Rewrites the values===========================
// while(getCon.firstChild){
// 	getCon.removeChild(getCon.firstChild);
// }	
//getKon.innerHTML = " "
// while(getKon.firstChild){
// 	getKon.removeChild(getKon.firstChild);
// }
// ==============Initial starting code that yielded no results==============
// 	for(var a = 0; a < player.current.length; a++) {
// 		player.current[a]
// 	if {
// 		player.current // take the current hand, call for the array value and add the value 
// 	}
// }//turned off fam
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
function createNewGame(){
	alert("New Game!")

	// make a new set of decks 
	deck = [];
	makeDeck(6); // game starts with 6 decks
	for(let i = 0 ; i < 4 ; i++){ //shuffle decks 3 times
		shuffleDeck(deck);
	}

	// reinitialize dealer and player objects
	dealer.reInit();
	player.reInit();

	// render player
	player.render();

	// open the bet
	dealBtn.disabled = false;
}

function render(){

	if(player.pHand.length == 0 && dealer.dHand.length == 0 && !bet.isBet){
		playerHand.innerHTML = ""
		dealerHand.innerHTML = ""
	}else{
		for(let i = 0, j = 0 ; i<player.pHand.length || j<dealer.dHand.length ; i++, j++){
			if(i < dealer.dHand.length){
				renderCard(i);
			}
			if(j < player.pHand.length){
				renderCard(j);
			}
		}
	}
}

function renderCard(index){
	dealer.dPoints += dealer.dHand[index].pointValue;
	let cardImgPath = null;
	if(index == 1){
		cardImgPath = "./images/back_of_card.jpg";
	}else{
		cardImgPath = getImgPathfromCard(dealer.dHand[index]);
	}
	
	const cardImgElmnt = getImgElmnt(cardImgPath);
	dealerHand.innerHTML += cardImgElmnt;
}

function clearTable(){
	while(player.pHand.length <= 1){
		usedDeck.push(player.pHand.pop());
	}
	while(dealer.dHand.length <= 1){
		usedDeck.push(dealer.dHand.pop());
	}
	player.setPoints(0);
	dealer.setPoints(0);
	bet.reInit();
}

function checkForWinner(){

	if(player.getPoints() > 20){
		bet.handleBet(dealer); // dealer wins
		clearTable();
		render();
	}


}

function dealCards(){
	let dealedCards = [];
	let card = null;
	for(let i = 0; i < 4 ; i++){
		card = deck.pop();
		dealedCards.push(card);
	}
	dealer.dHand.push(dealedCards[0]);
	console.log(dealer);
	player.pHand.push(dealedCards[1]);
	dealer.dHand.push(dealedCards[2]);
	player.pHand.push(dealedCards[3]);
}

function deal(){
	const betAmount = Number(document.getElementById("deal-amount").value);
	if(betAmount < 1){
		alert("Plase enter a valid amount!");
		return;
	}
	bet.amount = betAmount;		// put the money to bet
	bet.isBet = true;
	dealBtn.disabled = true;	// close the bet

	player.money -= bet.amount;	// cut the money from player
	player.render();			// render the updated money

	dealCards();
	render();
	checkForWinner();

	// enable game buttons
	hitBtn.disabled = false;
	standBtn.disabled = false;
}

function hit(){
	player.pushE(deck.pop());
	player.renderCard(player.len()-1);
	checkForWinner();
}

function stand(){

}
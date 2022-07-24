const dealerHand = document.getElementById("dealer-hand");
const dealerPoints = document.getElementById("dealer-points");

const playerHand = document.getElementById("player-hand");
const playerPoints = document.getElementById("player-points");
const playerMoney = document.getElementById("player-money");

const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
let deck = [];
let usedDeck = [];


const dealer = {
	dHand: [], dPoints: 0,

	renderCard: (index) => {
		console.log(this.dHand);
		// console.log(index);
		dPoints += dHand[index].pointValue;
		let cardImgPath = null;
		
		if(index == 1){
			cardImgPath = "./images/back_of_card.jpg";
		}else{
			cardImgPath = getImgPathfromCard(this.dHand[index]);
		}
		
		const cardImgElmnt = getImgElmnt(cardImgPath);
		dealerHand.innerHTML += cardImgElmnt;
	},

	reInit: () => {
		dHand = [];
		dPoints = 0;
	},

}

const player = {
	pHand: [],	pPoints: 0, money: 200,

	render: () => {
		playerMoney.innerHTML = this.money;
		
	},

	renderCard: (index) => {
		this.pPoints += this.pHand[index].pointValue;
		const cardImgPath = getImgPathfromCard(this.pHand[index]);
		const cardImgElmnt = getImgElmnt(cardImgPath);
		playerPoints.innerHTML = this.pPoints;
		playerHand.innerHTML += cardImgElmnt;
	},


	reInit: () => {
		this.pHand = [];
		this.pPoints = 0;
		this.money = 200;
	},
}

const bet = {
	amount: 0,
	isBet: false,
	winner: null,

	handleBet: (winner) => {
		this.winner = dealer;
	},

	reInit: () => {
		this.amount = 0;
		this.winner = null;
		this.isBet = false;
	}
}
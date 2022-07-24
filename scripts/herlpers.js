function shuffleDeck(array) {
	let currentIndex = array.length,  randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {

		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
}

function makeCard(rank, suit){
	const card = {
		rank: rank,
		suit: suit,
		pointValue: rank.length > 2 ? 10 : rank === 10 ? 10 : rank
	};
	deck.push(card);
}

function makeDeck(deckQuantity){

	for (let i = 0 ; i < deckQuantity ; i++){ 
		for (let suit of suits) {
			for (const rank of ranks) {
				makeCard(rank, suit);
			}
		}
	}
}
function getImgElmnt(path){
	return "<img src=\""+path+"\">";
}

function getImgPathfromCard(card){
	return './images/'+card.rank+'_of_'+card.suit+'.png';
}
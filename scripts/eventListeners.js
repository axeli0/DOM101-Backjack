const dealBtn = document.getElementById("deal-button");
const hitBtn = document.getElementById("hit-button");
const standBtn = document.getElementById("stand-button");
const newGameBtn = document.getElementById("newgame-button");

// disable buttons before game starts
dealBtn.disabled = true;
hitBtn.disabled = true;
standBtn.disabled = true;

newGameBtn.addEventListener("click",createNewGame);
dealBtn.addEventListener("click",deal);
hitBtn.addEventListener("click", hit);
standBtn.addEventListener("click", stand);
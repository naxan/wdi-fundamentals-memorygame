let cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
let cardsInPlay = [];

let wins = 0;
let losses = 0;

function checkForMatch() {
  let winScore = document.getElementById("winScore");
  let loseScore = document.getElementById("loseScore");
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
    wins++;
    winScore.textContent = wins;
  } else {
    alert("Sorry, try again.");
    losses++;
    loseScore.textContent = losses;
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");

  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  this.setAttribute("src", cards[cardId].cardImage);

  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
}

createBoard();

/*
when button is clicked
img src attribute becomes card back
cardsInPlay array equals empty array
*/

function resetGame() {
  cardsInPlay = [];
  let cardImages = document.getElementsByTagName("img");
  for (i = 0; i < 4; i++) {
    cardImages[i].setAttribute("src", "images/back.png");
  }
}

let resetButton = document.querySelector("button");
resetButton.addEventListener("click", resetGame);

/*
create wins variable
create losses variable
when match is checked
if match is true, wins + 1
if false, losses + 1
*/

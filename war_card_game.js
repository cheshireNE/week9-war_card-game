// war_card_game.js
// This file sets up and runs the War card game **in the browser** (or Node.js).
// It uses the pure logic functions from gameLogic.js and handles the game flow and DOM updates.

const { compareCards, shuffleDeck, createDeck } = require('./gameLogic.js');

// Player hands and scores
let player1Hand = [];
let player2Hand = [];
let player1Score = 0;
let player2Score = 0;

// Deal 26 cards to each player
function dealCards() {
  const deck = shuffleDeck(createDeck());
  player1Hand = deck.slice(0, 26);
  player2Hand = deck.slice(26, 52);
}

// Play all 26 rounds of the game
function playGame() {
  dealCards();

  for (let i = 0; i < 26; i++) {
    const card1 = player1Hand[i];
    const card2 = player2Hand[i];

    const result = compareCards(card1, card2);

    // Update scores based on round winner
    if (result === 1) player1Score++;
    else if (result === -1) player2Score++;

    // Print round details to console
    console.log(`Round ${i + 1}: ${card1.name} vs ${card2.name}`);
    console.log(`Current Score -> Player 1: ${player1Score}, Player 2: ${player2Score}`);
  }

  declareWinner();
}

// Declare the final winner of the game
function declareWinner() {
  if (player1Score > player2Score) {
    console.log("Player 1 wins!");
    // document.getElementById("winner").textContent = "Player 1 wins!";
  } else if (player1Score < player2Score) {
    console.log("Player 2 wins!");
    // document.getElementById("winner").textContent = "Player 2 wins!";
  } else {
    console.log("It's a tie!");
    // document.getElementById("winner").textContent = "It's a tie!";
  }
}

// If this script is loaded in the browser, set up the button event listener
if (typeof document !== 'undefined') {
  // document.getElementById("startGame").addEventListener("click", playGame);
  console.log("Ready to play the War card game in the browser!");
} else {
  // If running in Node.js (like when using Mocha tests), playGame() can still run for demonstration
  playGame();
}

// Export for testing or other usage
module.exports = { playGame, declareWinner, dealCards };

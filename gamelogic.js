// gameLogic.js
// This file contains the **core logic** for the War card game without browser-specific code.

// Function to compare two cards and determine the winner
function compareCards(card1, card2) {
  if (card1.value > card2.value) return 1;
  if (card1.value < card2.value) return -1;
  return 0;
}

// Fisher-Yates shuffle to randomize the deck
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

// Function to create a standard 52-card deck
function createDeck() {
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const values = [
    { name: 'Ace', value: 1 },
    { name: '2', value: 2 },
    { name: '3', value: 3 },
    { name: '4', value: 4 },
    { name: '5', value: 5 },
    { name: '6', value: 6 },
    { name: '7', value: 7 },
    { name: '8', value: 8 },
    { name: '9', value: 9 },
    { name: '10', value: 10 },
    { name: 'Jack', value: 11 },
    { name: 'Queen', value: 12 },
    { name: 'King', value: 13 }
  ];

  const deck = [];
  for (let suit of suits) {
    for (let val of values) {
      deck.push({
        name: `${val.name} of ${suit}`,
        value: val.value
      });
    }
  }
  return deck;
}

// Exporting the functions for use in other files (like tests or browser game)
module.exports = { compareCards, shuffleDeck, createDeck };

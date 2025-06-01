// test/game.test.js
// This file tests the functions in gameLogic.js using Mocha and Chai.
// It ensures that the core logic of the War card game works correctly in Node.js.

// Import the Chai library and its expect function
const chai = require('chai');
const expect = chai.expect;

// Import the pure logic functions from gameLogic.js
const { compareCards, shuffleDeck, createDeck } = require('../gamelogic.js');


// Group tests for the compareCards function
describe('compareCards function', () => {
  it('should return 1 if the first card is higher', () => {
    const result = compareCards({ value: 10 }, { value: 5 });
    expect(result).to.equal(1);
  });

  it('should return -1 if the first card is lower', () => {
    const result = compareCards({ value: 3 }, { value: 8 });
    expect(result).to.equal(-1);
  });

  it('should return 0 if the cards are equal', () => {
    const result = compareCards({ value: 7 }, { value: 7 });
    expect(result).to.equal(0);
  });
});

// Group tests for the shuffleDeck function
describe('shuffleDeck function', () => {
  it('should shuffle the deck and keep the same number of cards', () => {
    const deck = createDeck();
    const shuffledDeck = shuffleDeck([...deck]); // Use a copy to avoid side effects

    // Deck should still have 52 cards after shuffle
    expect(shuffledDeck).to.have.lengthOf(52);

    // At least one card should change position
    const atLeastOneCardMoved = deck.some((card, index) => card.name !== shuffledDeck[index].name);
    expect(atLeastOneCardMoved).to.be.true;
  });
});

// Group tests for the createDeck function
describe('createDeck function', () => {
  it('should create a deck with 52 cards', () => {
    const deck = createDeck();
    expect(deck).to.have.lengthOf(52);
  });

  it('should contain specific cards, e.g., Ace of Spades', () => {
    const deck = createDeck();
    const hasAceOfSpades = deck.some(card => card.name === 'Ace of Spades' && card.value === 1);
    expect(hasAceOfSpades).to.be.true;
  });
});

// To run these tests, use: `npm test` in the project root

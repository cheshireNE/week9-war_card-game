
// === War Card Game Project ===
// This JavaScript file creates an automated War card game for two players.
// It uses classes (Deck and Game), deals cards, compares them each round, and tracks scores.
// All results are shown in the browser console, and the final winner is also displayed in HTML.

console.log("Script is working!");

// === Deck class to create and shuffle a standard 52-card deck ===
class Deck {
  constructor() {
    // Array to hold the 52 cards
    this.deck = [];
    // Array of ranks and suits for building the deck
    this.ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    this.suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  }

  // Method to create the full deck by combining suits and ranks
  createDeck() {
    this.deck = []; // Clear the deck first
    for (let suit of this.suits) {
      for (let i = 0; i < this.ranks.length; i++) {
        let card = {
          name: `${this.ranks[i]} of ${suit}`, // Example: "Queen of Hearts"
          value: i + 1 // Ace=1, 2=2, ..., King=13
        };
        this.deck.push(card); // Add the card to the deck
      }
    }
  }

  // Method to shuffle the deck using the Fisher-Yates shuffle algorithm
  shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]; // Swap
    }
  }
}

// === Game class to handle players, dealing, rounds, and scoring ===
class Game {
  constructor() {
    // Initialize two players with name, score, and an empty hand
    this.player1 = {
      name: "Jedai Master",
      score: 0,
      hand: []
    };
    this.player2 = {
      name: "Sith Lord",
      score: 0,
      hand: []
    };
  }

  // Method to play the full game from start to finish
  playGame() {
    // 1️⃣ Create and shuffle the deck
    const deck = new Deck();
    deck.createDeck();
    deck.shuffleDeck();

    // 2️⃣ Deal the shuffled cards alternately to player1 and player2 until the deck is empty
    while (deck.deck.length !== 0) {
      this.player1.hand.push(deck.deck.shift()); // Give next card to player1
      this.player2.hand.push(deck.deck.shift()); // Then give next card to player2
    }

    // 3️⃣ Confirm the hands are filled (26 cards each)
    console.log("Player 1 hand:", this.player1.hand);
    console.log("Player 2 hand:", this.player2.hand);

    // 4️⃣ Play 26 rounds: compare one card from each hand and award points
    for (let i = 0; i < this.player1.hand.length; i++) {
      const card1 = this.player1.hand[i];
      const card2 = this.player2.hand[i];

      console.log(`${this.player1.name} plays: ${card1.name}`);
      console.log(`${this.player2.name} plays: ${card2.name}`);

      if (card1.value > card2.value) {
        this.player1.score++;
        console.log(`${this.player1.name} wins this round!`);
      } else if (card1.value < card2.value) {
        this.player2.score++;
        console.log(`${this.player2.name} wins this round!`);
      } else {
        console.log("It’s a tie. No points awarded.");
      }

      // Enhancement: show who is currently leading after this round
      if (this.player1.score > this.player2.score) {
        console.log(`${this.player1.name} is currently leading.`);
      } else if (this.player1.score < this.player2.score) {
        console.log(`${this.player2.name} is currently leading.`);
      } else {
        console.log("The game is currently tied.");
      }

      // Show current scores after the round
      console.log(`Current Score -> ${this.player1.name}: ${this.player1.score}, ${this.player2.name}: ${this.player2.score}`);
      console.log("---------------------");
    }

    // 5️⃣ Declare the final winner after all rounds are complete
    this.declareWinner();
  }

  // Method to declare the final winner based on scores
  declareWinner() {
    console.log("Final Scores:");
    console.log(`${this.player1.name}: ${this.player1.score}`);
    console.log(`${this.player2.name}: ${this.player2.score}`);
    let winnerText = "";
    if (this.player1.score > this.player2.score) {
      winnerText = `${this.player1.name} wins the game!`;
    } else if (this.player1.score < this.player2.score) {
      winnerText = `${this.player2.name} wins the game!`;
    } else {
      winnerText = "The game is a tie!";
    }
    console.log(winnerText);
    // Also update the HTML to display the final winner on the page
    document.getElementById("winner").innerText = winnerText;
  }
}

// === Create a new game instance and play it! ===
const game = new Game();
game.playGame();

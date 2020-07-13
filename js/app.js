/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//uses jquery to initilaize the game and manage game states 
const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
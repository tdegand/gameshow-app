/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const startButton = document.querySelector('#btn__reset');

startButton.addEventListener('click', () => {
    const game = new Game();
    game.startGame();
})
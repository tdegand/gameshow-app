/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const start = document.querySelector('.start');

start.addEventListener('click', () => {
    const game = new Game();
    game.startGame();
})
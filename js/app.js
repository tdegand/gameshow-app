/**
 * When "Start Game" is clicked it will do the following:
 * create new game object
 * call the startGame Method from Game.js
 */
const startButton = document.querySelector('#btn__reset');
const game = new Game();

startButton.addEventListener('click', () => {
    game.startGame();
})


/**
 * When "Start Game" is clicked it will do the following:
 * create new game object
 * call the startGame Method from Game.js
 */
const startButton = document.querySelector('#btn__reset');
const game = new Game();

startButton.addEventListener('click', () => {
    game
    game.startGame();
})

//handles the interaction with the querty keyboard displayed on screen
const keyButton = document.querySelectorAll('.key');

const newListenerFunction = (event) => {
    game.handleInteraction(event.target);
};

for (let i = 0; i < keyButton.length; i++) {
    keyButton[i].addEventListener('click', newListenerFunction);
}
//add key events and lets user select a letter using the corresponding key
document.addEventListener('keydown', (event) => {
    const buttons = document.querySelectorAll('#qwerty button');
    buttons.forEach(button => {
        if (button.textContent === event.key && button.disabled === false) {
            game.handleInteraction(button);
        }
    })
});





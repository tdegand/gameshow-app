/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class game {
    //Define the properties here
    constructor(missed, phrases, activephrase) {
        this.missed = 0;
        this.phrases = ['Well Hello!', 'Get over here', 'Just in time', 'Im going to win this', 'This is the best game ever'];
        this.activephrase = null;
    }
    /**
     * Start the game
     * remove the overlay
     * Add the active phrase to the screen
     * @param {} phrase 
     */
    startGame(phrase) {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activephrase = phrase;
        addPhraseToDisplay(phrase);
    }
    /**
     * Get a random phrase the phrases property
     * Return the Random Phrase
     */
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length)
        this.phrases.forEach(index => {
            if (randomPhrase === index) {
                return index
            }
        });

    }

    handleInteraction() {

    }

    removeLife() {

    }
    checkForWin() {

    }

    gameOver() {

    }
}
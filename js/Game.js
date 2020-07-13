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

    /**
     * 
     * @param {string} letter represents the letters of phrase
     */
    handleInteraction(letter) {
        const key = document.getElementsByClassName('key');
        //loop over the keys and check each one
        key.forEach(key => {
            if (this.key) {
                this.key.disabled;
            }
            //if selected key does not match remove a life adn add the class "wrong" 
            if (this.key.innerHTML !== letter) {
                this.key.classname = 'wrong';
                this.removeLife(miss);
            } else {
                //if key does match add class of "chosen" show the matched letter and check for a win
                this.key.classname = 'chosen';
                this.showMatchedLetter();
                return this.checkForWin();
            }
            //continue to check if the player has won or not
            if (this.checkForWin() === true) {
                return this.gameOver();
            }
        })
    }
    /**
     * Remove a heart if user is incorrect on guessing
     * @param {boolean} miss return true if user has missed, false if user is correct
     */
    removeLife(miss) {
        const hearts = document.querySelectorAll('.tries');
        hearts.forEach(heart => {
            if (miss) {
                heart.setAttribute('src', 'images/lostHeart.png');
            }
            this.missed++
        })

    }

    //checks to see if the user has won or not by revealing all letters or has any remaining hearts
    checkForWin() {
        const phraseContainer = document.getElementById('phrase ul');
        phraseContainer.children.forEach(letter => {
            if (letter.classname === 'show') {
                return true;
            } else {
                return false;
            }
        });
    }
    /**
     * win the game is over it displays the overlay again
     * if the player wins it displays a message and updates the overlay
     * if player loses it updates the message to a new message and the overlay class
     * @param {boolean} win  returns true if user wins, false is user loses
     */
    gameOver(win) {
        const overlay = document.getElementById('overlay');
        const gameMessage = document.getElementById('game-over-message');
        overlay.style.display = 'block';
        if (win) {
            gameMessage.innerHTML = `You win!`;
            overlay.classname = 'win';
        } else {
            gameMessage.innerHTML = `You lost...`;
            overlay.classname = 'lose';
        }
    }
}
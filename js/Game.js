class Game {
    //Define the properties here
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrases = [
            new Phrase('You talking to me'),
            new Phrase('Wheres Johnny'),
            new Phrase('Say hello to my little friend'),
            new Phrase('Protect The People At A Minutes Notice'),
            new Phrase('Its The End Of The World All Over Again'),
        ];
        return phrases;
    }
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    };
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay(Phrase);
    };
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const letters = document.querySelectorAll('.letter');
        const hidden = document.querySelectorAll('.hide').length;
        for (let i = 0; i < letters.length; i++) {
            if (hidden === 0) {
                return true;
            } else {
                return false;
            }
        }
    };
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const removeHeart = document.querySelectorAll('img')
        if (removeHeart.src === 'images/liveHeart.png') {
            removeHeart.src = 'images/lostHeart.png';
            this.missed++
        }
        if (this.missed >= 5) {
            return this.gameOver();
        }
    };
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay = document.querySelector('overlay');
        const message = document.querySelector('game-over-message');
        overlay.style.display = '';

        if (gameWon === true) {
            overlay.className = 'won'
            message.innerHTML = 'You Won!'
        } else {
            overlay.className = 'lose'
            message.innerHTML = 'You lost!'
        }

    };
}
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
            new Phrase('Hello My friend'),
            new Phrase('This phrase is too long'),
            new Phrase('Hello world'),
            new Phrase('oh look a new phrase'),
            new Phrase('what a nice surprise'),
            new Phrase('a fools heart'),
            new Phrase('shiver me timbers'),
            new Phrase('gotta do some testing'),
            new Phrase('Love and Peace'),
            new Phrase('Rock on'),
            new Phrase('fabulous movie'),
            new Phrase('Welcome to Jurassic park'),
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
        this.resetGame();
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

        if (this.missed === 0) {
            removeHeart[0].src = 'images/lostHeart.png';
            this.missed++
        } else if (this.missed === 1) {
            removeHeart[1].src = 'images/lostHeart.png';
            this.missed++
        } else if (this.missed === 2) {
            removeHeart[2].src = 'images/lostHeart.png';
            this.missed++
        } else if (this.missed === 3) {
            removeHeart[3].src = 'images/lostHeart.png';
            this.missed++
        } else if (this.missed === 4) {
            removeHeart[4].src = 'images/lostHeart.png';
            this.missed++
        }

        if (this.missed === 5) {
            return this.gameOver();
        }
    };
    /**
    * Displays game over message if user lost
    * Displays you won message if user wins!
    */
    gameOver() {
        const overlay = document.querySelector('#overlay');
        const message = document.querySelector('#game-over-message');
        const button = document.querySelector('#btn__reset');
        overlay.style.display = '';

        if (this.checkForWin(true)) {
            overlay.className = 'win'
            message.innerHTML = 'You Won!'
            button.innerHTML = 'Start New Game';
        } else {
            overlay.className = 'lose'
            message.innerHTML = 'You lost!'
            button.innerHTML = 'Start New Game';
        }
    };
    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        button.disabled = true;

        if (this.activePhrase.checkLetter(button.innerHTML) === false) {
            button.classList.add('wrong');
            this.removeLife();
        } else {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.innerHTML);
            this.checkForWin();
            if (this.checkForWin() === true) {
                this.gameOver();
            }
        }
    };
    /**
     * This will reset the HTMl elements back to default
     * letter list is emptied
     * key buttons are set back to default
     * Hearts are set back to default
     */
    resetGame() {
        const phraseList = document.querySelector('#phrase ul');
        phraseList.innerHTML = '';

        const keyButton = document.querySelectorAll('.keyrow button');
        for (let i = 0; i < keyButton.length; i++) {
            keyButton[i].disabled = false;
            keyButton[i].classList.remove('wrong');
            keyButton[i].classList.remove('chosen');
        }

        const scoreboard = document.querySelectorAll('.tries img')
        this.missed = 0;
        for (let i = 0; i < scoreboard.length; i++) {
            scoreboard[0].src = 'images/liveHeart.png';
            scoreboard[1].src = 'images/liveHeart.png';
            scoreboard[2].src = 'images/liveHeart.png';
            scoreboard[3].src = 'images/liveHeart.png';
            scoreboard[4].src = 'images/liveHeart.png';
        }
    };
}
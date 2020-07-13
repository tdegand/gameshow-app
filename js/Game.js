/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

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
        this.activephrase = this.getRandomPhrase();
        this.addPhraseToDisplay()
    };
}
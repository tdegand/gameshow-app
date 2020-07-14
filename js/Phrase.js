/* Create the "phrase' class
*  @phrase is a class that uses a constructor to create a class with properties
* */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase(phrase)
    }
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const phraseContainer = document.querySelector('#phrase ul');
        phraseContainer.className = 'phrase';

        //split the phrase into indivudiual letters
        const letters = this.phrase.split('');
        const regex = new RegExp(/[a-z]/);

        /** compare the letters to the RegEx
            if those letters match then add classname of letter
            If not then add classname of space
            append each new element     
        */
        letters.forEach(letter => {
            if (regex.test(letter)) {
                const newListItem = document.createElement('li');
                newListItem.className = 'letter hide'
                newListItem.innerHTML = `${letter}`;
                phraseContainer.appendChild(newListItem);
            } else {
                const newListItem = document.createElement('li');
                newListItem.className = 'space'
                phraseContainer.appendChild(newListItem);
            }
        });
    };
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const displayedLetters = document.querySelector('.letter')
        displayedLetters.forEach(item => {
            if (item.classList.contains('letter') && item.innerHTML === letter) {
                item.className = 'show';
                item.innerHTML = `${letter}`;
            }
        })
    };
}

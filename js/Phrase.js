
/* Create the "phrase' class
*  @phrase is a class that uses a constructor to create a class with properties
* */

class phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase(phrase);
    }
    addPhraseToDisplay() {
        const phraseContainer = document.getElementById('phrase ul');
        phraseContainer.className = "phrase";

        //split the phrase into indivudiual letters
        const letters = this.phrase.split('');
        const regex = new RegExp(/[a-z]/);
        const newListItem = document.createElement('li');

        /** compare the letters to the RegEx
            if those letters match then add classname of letter
            If not then add classname of space
            append each new element     
        */
        letters.forEach(letter => {
            if (regex.test(letters)) {
                newListItem.className = 'letter'
                phraseContainer.appendChild(newListItem);
            } else {
                newListItem.className = 'space'
                phraseContainer.appendChild(newListItem);
            }
        })


    }
    //Evaluate whether user inputs matches the letter or not
    checkLetter(letter) {
        this.phrase.includes(letter) ? true : false;
    }

    /**
     * If the user input matches the letter that is hidden. Set it to show
     */
    chowMatchedLetter() {
        const phraseContainer = document.getElementById('phrase ul');
        phraseContainer.children.forEach(letter => {
            if (this.letter.className === 'hide') {
                this.letter.className = 'show';
            }
        })
    }
}

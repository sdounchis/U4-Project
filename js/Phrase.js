/* Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /**
     * no param
     * no return
     * adds a phrase to the display by adding html to
     */
    addPhraseToDisplay(){
        for(let i = 0; i<this.phrase.length; i++){
            if(this.phrase.charAt(i)==" "){
                $('#phrase ul').html($('#phrase ul').html() + `<li class = 'space'> </li>`)
            }
            else{
                $('#phrase ul').html($('#phrase ul').html() + `<li class = 'hide letter ${this.phrase.charAt(i)}'>${this.phrase.charAt(i)}</li>`)
            }
        }
    }
    /**
     * @param {string}  letter - letter clicked to be checked if in phrase
     * @return {boolean} whether or not letter is in phrase
     */

    checkLetter(letter){
        if(this.phrase.indexOf(letter)>=0){
            return true;
        }
        return false;
    }

    /**
     * @param {string}  letter - letter clicked to be shown if checkLetter
     * no return
     * change li classname of letter from hide to show (changes in CSS)
     */
    showMatchedLetter(letter){
        if(this.checkLetter(letter)){
            const arr = document.getElementsByClassName(`hide letter ${letter}`);
            for(let i = arr.length -1; i>=0; i--){
                arr[i].className = `show`;
            }
        }
    }
 }
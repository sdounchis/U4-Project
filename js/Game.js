/* Project 4 - OOP Game App
 * Game.js */

 class Game{
    constructor(){
        this.missed = 0;
        this.phrases = [new Phrase('Fastest show on turf'), new Phrase('Stairway to Seven'), new Phrase('Icing the kicker'), new Phrase('Tom Brady is the GOAT'), new Phrase('Scoop and score'), new Phrase('roughing the passer'), new Phrase('the steel curtain'), new Phrase('the patriots are cheaters'), new Phrase('Double Doink Special'), new Phrase('On to Cincinnati')];
        this.activePhrase = null;
    }

    /**
     * no param
     * no return
     * hide screen overlay
     * set active phrase to a random phrase
     * adds active phrase to display
     */
    startGame(){
        $('#overlay').fadeOut(1000);
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        $("#winPic").hide();
        $("#losePic").hide();
        // let element =  document.getElementById('nflLogo');
        // element.classList.add('animated', 'bounceInLeft');

    }

    /**
     * no param
     * @return {string} a random phrase
     */
    getRandomPhrase(){
        let num = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[num];
    }
    
    /**
     * @param {button element} button - pass in one of the key buttons
     * no return
     * disable button
     * check the letter of the button
     * if button in phrase -> class = wrong, removeLife
     * if not -> class = chosen, show letter in phrase, checkforwin (if)-> gameover
     */

    handleInteraction(button){
        if(this.activePhrase!==null){
            if(!this.activePhrase.checkLetter(button.textContent)){
                button.className = 'wrong';
                this.removeLife();
            }
            else{
                button.className = 'chosen';
                this.activePhrase.showMatchedLetter(button.textContent);
                if(this.checkForWin()){
                    this.gameOver();
                }
            }
        }
        if(button.className!=="key"){
            button.disabled = true;
        }
    }

    /**
     * no parameter
     * no return
     * getArray of images
     * get a strike and change to lost strike
     * and one to missed
     * check if missed = 5 -> gameOver
     */
    removeLife(){
        let imgArr = document.getElementsByTagName('img');
        for(let i = 0; i<imgArr.length; i++){
            if(imgArr[i].getAttribute('src')=='images/strike.png'){
                imgArr[i].setAttribute('src', 'images/lostStrike.png');
                this.missed += 1;
                i = imgArr.length;
            }
        }
        if(this.missed == 5){
            this.gameOver();
        }
        
    }

    /**
     * no paramater
     * @return {boolean} true if no hid letters, false otherwise
     * check for hid letters
     * if none -> return true (win)
     * else -> return false (not win)
     */
    checkForWin(){
        let arr = document.getElementsByClassName('hide');
        if(arr.length == 0){
            return true;
        }
        return false;
    }

    /**
     * no parameter
     * no return
     * show overlay screen
     * if checkforwin -> you win message, start class change to win (changing overlay screen), winPic fades in
     * if not -> you lose message, start class change to lose (changing overlay screen), losepic fades in
     */
    gameOver(){
        $('#overlay').show();
        if(this.checkForWin()){
            $('#game-over-message').html('Good Job... You WIN');
            $('.start').prop('class', 'win');
            $("#winPic").fadeIn(1500);
            
        }
        else{
            $('#game-over-message').html('Dissapointing... You LOSE');
            $('.start').prop('class', 'lose');
            $("#losePic").fadeIn(1500);
        }
    }


 }
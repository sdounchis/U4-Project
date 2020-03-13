 /* Project 4 - OOP Game App
 * app.js */
//hide win and lose pics to start game
$("#winPic").hide();
$("#losePic").hide();
 /**
  * instantiates new Game
  * adds a on click event to the start button that resets the game and starts a new one
  */
var game = new Game();
$("#btn__reset").click(()=>{
    resetGame();
    game.startGame();
});


/**
  * gets array of all they key buttons
  * adds an event listener to all the buttons (on click, call handle interaction passing in the button)
  * add event listener for keyup 
  * make sure key is a letter -> go through buttons to find the one with the same textContent as key pressed -> call handle interaction passing in the button
  */

var buttons = document.getElementsByClassName('key');

for(let r = 0; r<buttons.length; r++){
    buttons[r].addEventListener('click', function(){
        game.handleInteraction(this);
    })
}

$(document).on('keyup', (e)=>{
    let code = e.which;
    if(code>64 && code <91){
        let key = e.key;
        let button;
        for(let r = 0; r<buttons.length; r++){
            if(buttons[r].textContent == key){
                button = buttons[r];
                r = buttons.length;
            }
        }
        game.handleInteraction(button);
    }
})

/**
 * no parameter
 * no return
 * reset buttons with chosen and wrong classnames to enabled and classname = key
 * reset all the images back to the strike.png(red strike) and set missed back to 0
 */

function resetGame(){
    $('#phrase ul').html('');

    let arrC = document.getElementsByClassName(`chosen`);
    for(let i = arrC.length -1; i>=0; i--){
        let text = arrC[i].textContent;
        arrC[i].disabled = false;
        arrC[i].className = `key`;
    }

    let arrW = document.getElementsByClassName(`wrong`);
    for(let i = arrW.length -1; i>=0; i--){
        let text = arrW[i].textContent;
        arrW[i].disabled = false;
        arrW[i].className = `key`;
    }

    let imgArr = document.getElementsByTagName('img');
    for(let i = 0; i<imgArr.length; i++){
        if(imgArr[i].getAttribute('src')=='images/lostStrike.png'){
            imgArr[i].setAttribute('src', 'images/strike.png');
                game.missed = 0;
        }
    }
}





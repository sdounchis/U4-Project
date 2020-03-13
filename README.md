# Unit-4-Project-OOP-Game-Show
Unit 4/Midterm Project- The NFL Phrase Hunter Game Show 
by Sebastian Dounchis

In this project, the first page displays the title of the game and a start game button. Clicking this button takes you to a page in which a random NFL phrase is chosen. By clicking buttons with letters or clicking keys with the same letters, the player can check whether or not the letter is in the phrase. If so, the letter appears and the button respective to that letter turns green. If not, button respective to that letter turns red, you lose a strike, so one red strike turns into an empty strike. If a player finishes the phrase before all strikes are gone (5 wrong guesses), a win screen appears with a win message and a win picture. If a player doesn't finish the phrase before all strikes are gone (5 wrong guesses), a lose screen appears with a lose message and a lose picture. Both the win and lose pages have a start game button that reset the game to a new NFL game with a random phrase.

This project tested my ability to code by manipulating objects and their methods to create a game similar to that
of wheel of fortune. This project also gave me an ability to customize which increased my ability to figure out how to code different things into my game without direction. This customization gave me freedom to give the project my own unique vision.

Tips To Use This Project:
    -in the handleInteraction function of the game class I first check for the active phrase then check if the key is null so players can refresh the screen using the command + r shortcut without disabling the "r" button
    -I use both jquery and vanilla javascript in this project, so when calling functions on certain vars make sure the jquery functions are called on jquery vars and vice versa. 
    -phrases that another user adds have to be all letters as they cannot be numbers or symbols, but the phrases are not case sensitive

Style Changes to Original Project:
    -Changed overall font to Ariel
    -Title 
        -added an NFL image to both sides of the title on the start screen and game screen title
        -changed font to Brushstroke
        -font size of start game title equals 5em

    -Game Over Message
        -font size up to 50px
        -font to Lucidatypewriter

    -Start Game Button
        -increased button width
        -increased font size of button to font size large

    -Shown Matched Letter
        -changed background color to #8F00FF

    -Chosen Button (correct)
        -changed background color to #94AF71

    -Wrong Button
        -changed background color to #AF6868

    -Win Screen
        -changed background color to green
        -added a center-aligned celebratory NFL picture to screen
    
    -Lose Screen
        -changed background color to #f5785f
        -added a center-aligned sad NFL picture to screen

    -Strikes instead of Hearts
        -Original game came with heart icons as the system of counting lives
        -Changed live hearts to red strikes and lost hearts to empty strikes
        -Player only gets 5 strikes which equals 5 lives





// To make sure JavaScript only runs after HTML loads
$(document).ready(function() {

// Array of possible user or computer choices.
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking game stats. Wins/losses start at 0. Guesses at 9.
	var wins = 0;
	var losses = 0;
	var guessesLeft = 7;

//Variable for computerGuess to pick random letter choice
	var computerGuess = alphabet[Math.floor(Math.random() + alphabet.length)];
	console.log(computerGuess);
	
// Record keyboard input from user.
    document.onkeyup = function(event) {
// Pulls user key pressed, changes to lower case. Save as event key variable.
    var userGuess = event.key;

       }
     for (i=0, i<alphabet.length, i++) {   
        //If correct letter is pressed, add to Wins
        if (userGuess === computerGuess) {
        	Wins++;
        }
        // If incorrect letter presses, add 1 to losses, subtract 1 guess, show past guesses.
        else {
            Losses++;
            Guesses Left--;
         }
        if guesses === 0 {
            alert("You lose. You don't have the gift!");
        }
// Possible fix for getting count of choices in browser

        //document.querySelector('wins') ______ = "Wins: "+ wins;
        //document.querySelector('losses')
        //document.querySelector('guessesLeft')
    }
}
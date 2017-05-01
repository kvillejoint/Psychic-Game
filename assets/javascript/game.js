// To make sure JavaScript only runs after HTML loads
$(document).ready(function() {

// Array of possible user or computer choices.
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking game stats. Wins/losses start at 0. Guesses at 9.
	var wins = 0;
	var losses = 0;
	var guessesLeft = 7;
	var guessedLetters = []; //for storing user guesses
	
// Record keyboard input from user.
    document.onkeyup = function(event) {
// Pulls user key pressed, changes to lower case. Save as event key variable.
    	var userGuess = event.key;
    	guessedLetters.push (userGuess);

//Variable for computerGuess to pick random letter choice
		
		var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log(computerGuess);

//winsDisplay.innerHTML = winsCounter --> possible start for javascript attempt of counters
		
	        //If correct letter is pressed, add to Wins
	        if (userGuess === computerGuess) {
	        	wins++;
	        	// add number of wins to HTML by appending
	           	$("#wins").text("Wins: " + wins);
	        }	
	        // If incorrect letter presses, add 1 to losses, subtract 1 guess, show past guesses.
	        else {
	            losses++;
	            // add number of losses to HTML by appending
				$("#losses").text("Losses: " + losses);
	            guessesLeft--;
	            $("#guessesLeft").text("Guesses Left: " + guessesLeft);
	            // add number of guesses to HTML by appending
	            $("#guessesSoFar").text("Guessed so far: " + guessedLetters);
	            // javascript alternative should be something like this: document.querySelector("#guessesSoFar")[0].textContent = guessedLetters
	         }
	        //When no guesses left the game ends
	        if (guessesLeft === 0) {
	            alert("You lose. You don't have the gift!");
	            
	            //Reset all counters to begin game again - Section not working properly
				/*
				function resetGame() {
	  			losses = 0;
	  			guessesLeft = 7;
	  			guessedLetters = [];
	  			*/
	        }

	        
   }
})
/* MISSING ITEMS: 
1. Reset function or when person loses
2. Populate starting values for wins, losses, and guesses left
*/

// Possible fix for getting count of choices in browser if using JavaScript
        //document.querySelector('wins') ______ = "Wins: "+ wins;
        //document.querySelector('losses')
        //document.querySelector('guessesLeft')
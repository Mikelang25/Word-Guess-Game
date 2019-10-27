
//creates the array of word choices for the computer
var computerChoices = ["throw","steal","jeter","glove"]

var wins = document.getElementById("txt-wins");
var guessesRemaining = document.getElementById("txt-gs-rem");

document.onkeyup = function(event) {

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("Computer Guesses: " + computerGuess)
        console.log("Computer Guess is " + computerGuess.length + " characters long")
    var userGuess = event.key.toLowerCase();
        console.log("User Guesses: " + userGuess)

    guessesRemaining.innerText = parseInt(guessesRemaining.innerText) - 1

    

    
    
    wins.innerText = 0

}
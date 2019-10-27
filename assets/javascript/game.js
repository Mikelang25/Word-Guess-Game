
//creates the array of word choices for the computer
var computerChoices = ["throw","steal","jeter","glove"]
//creates an array container for the user's guesses 
var userGuessAll = []

var wins = document.getElementById("txt-wins");
var guessesRemaining = document.getElementById("txt-gs-rem");
var guessesAll = document.getElementById("txt-gs-all");

//chooses a random selection of the computerChoices array created earlier

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {
    
    //if this is the first guess of the game then a computer guess is selected
    if(parseInt(guessesRemaining.innerText) === 13){
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
    console.log("Computer Guesses: " + computerGuess)
    console.log("Computer Guess is " + computerGuess.length + " characters long")
    var userGuess = event.key.toLowerCase();
    console.log("User Guesses: " + userGuess)

    userGuessAll.push(userGuess)
    guessesRemaining.innerText = parseInt(guessesRemaining.innerText) - 1





    //determines if they are any guesses remaining 
    if(parseInt(guessesRemaining.innerText) != 0){



        guessesAll.innerText = userGuessAll
    }
    //resets values and determines if there was a win
    else {
        userGuessAll = []
        guessesAll.innerText = ""
        guessesRemaining.innerText = 13
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

    
}
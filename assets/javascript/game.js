
//creates the array of word choices for the computer
var computerChoices = ["jeter"]
//creates an array container for the user's guesses 
var userGuessAll = []

var wins = document.getElementById("txt-wins");
var guessesRemaining = document.getElementById("txt-gs-rem");
var guessesAll = document.getElementById("txt-gs-all");
var currentword = document.getElementById("txt-word")
var Buildword = ""

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


        //determines if the user guess already exists in the array of guesses 
        if(userGuessAll.indexOf(userGuess) == -1){
            
                //adds the users guess to the userGuessAll array 
                userGuessAll.push(userGuess)
            
                
                Buildword = ""
                for(var i = 0; i < computerGuess.length; i++){
                    if(userGuessAll.includes(computerGuess[i])){
                        console.log("Correct guess:" + computerGuess[i]);
                        Buildword = Buildword + computerGuess[i];
                        
                    }
                    else{
                        Buildword = Buildword + "_"
                    }
                }
                currentword.innerText = Buildword

            //determines if they are any guesses remaining 
            if(parseInt(guessesRemaining.innerText) != 1){

                //subtracts the guesses remaining by 1 each time a key is pressed
                guessesRemaining.innerText = parseInt(guessesRemaining.innerText) - 1

                //shows the user all letters they have guessed so far 
                guessesAll.innerText = userGuessAll
            }
            //resets values and determines if there was a win when the guesses are gone
            else {
                userGuessAll = []
                guessesAll.innerText = ""
                guessesRemaining.innerText = 13
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            }
        }       

}
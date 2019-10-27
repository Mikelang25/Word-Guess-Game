
//creates the array of word choices for the computer
var computerChoices = ["flower","puzzle","agenda"]
//creates an array container for the user's guesses 
var userGuessAll = []

var frmwin = document.getElementById("txt-wins");
var frmloss = document.getElementById("txt-loss");
var guessesRemaining = document.getElementById("txt-gs-rem");
var guessesAll = document.getElementById("txt-gs-all");
var currentword = document.getElementById("txt-word")
var Buildword = ""
var wins = 0

//chooses a random selection of the computerChoices array created earlier

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];




document.onkeyup = function(event) {
    
    //if this is the first guess of the game then a computer guess is selected
    if(parseInt(guessesRemaining.innerText) === 13){
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

    console.log("Computer Guesses: " + computerGuess);
    console.log("Computer Guess is " + computerGuess.length + " characters long");
    var userGuess = event.key.toLowerCase();
    console.log("User Guesses: " + userGuess);


        //determines if the user guess already exists in the array of guesses 
        if(userGuessAll.indexOf(userGuess) == -1){
            guessesRemaining.innerText = parseInt(guessesRemaining.innerText) - 1
                //adds the users guess to the userGuessAll array 
                userGuessAll.push(userGuess)
            
                
                Buildword = ""
                for(var i = 0; i < computerGuess.length; i++){
                    if(userGuessAll.includes(computerGuess[i])){
                        console.log("Correct guess:" + computerGuess[i]);
                        Buildword = Buildword + computerGuess[i];
                        
                    }
                    else{
                        Buildword = Buildword + " _ ";
                    }
                }

                //updates the txt-word to however many letters the user has gotten
                currentword.innerText = Buildword



            //determines if they are any guesses remaining 
            if(parseInt(guessesRemaining.innerText) != 0){

                //checks to see if the user guesses equal the value of the computer guess 
                if(Buildword == computerGuess){
                    wins = wins + 1;
                    guessesRemaining.innerText = 13;
                    currentword.innerText = "_  _  _  _  _  _";
                    userGuessAll = [];
                }
                //updates the letters guessed on the page to the userGuessAll array
                guessesAll.innerText = userGuessAll
            }
            //resets values and determines if there was a win when the guesses are gone
            else {

                userGuessAll = [];
                guessesAll.innerText = "";
                guessesRemaining.innerText = 13;
            }
        }   
        
    frmwin.innerText = wins

}
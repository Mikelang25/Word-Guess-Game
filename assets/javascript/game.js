
//creates the array of word choices for the computer
var computerChoices = ["hitter","helmet","lineup","stolen","strike","triple","umpire","piazza"]
//creates an array container for the user's guesses 
var userGuessAll = []

var frmwin = document.getElementById("txt-wins");
var frmloss = document.getElementById("txt-loss");
var guessesRemaining = document.getElementById("txt-gs-rem");
var guessesAll = document.getElementById("txt-gs-all");
var currentword = document.getElementById("txt-word");
var gameStatus = document.getElementById("txt-status"); 
var hint = document.getElementById("txt-hint");
var ghosthint = document.getElementById("txt-guess-hint");
var Buildword = "";
var wins = 0;
var losses = 0;



//document.getElementById("btn-hint").addEventListener("click",getHint);

document.onkeyup = function(event) {
    
    //removes the hints if they exist 
    $("#hint-label").remove();
    $("#hint-content").remove();
    //removes the video if the user plays another game
    $("#vid-opt").html("");


    //if this is the first guess of the game then a computer guess is selected
    if(parseInt(guessesRemaining.innerText) === 13){
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        ghosthint.innerText = computerGuess
        console.log(ghosthint)
        gameStatus.innerText = "";
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
                    $("#vid-opt").html("<iframe width='560' height='315' src='https://www.youtube.com/embed/c5hxDq4NiRw' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>")
                    gameStatus.innerText = "You win! The correct word was: " + computerGuess
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
                if(Buildword == computerGuess){
                    gameStatus.innerText = "You win! The correct word was: " + computerGuess
                    wins = wins + 1;
                    guessesRemaining.innerText = 13;
                    currentword.innerText = "_  _  _  _  _  _";
                    userGuessAll = [];
                }
                gameStatus.innerText = "You lose! The correct word was: " + computerGuess
                losses = losses + 1 
                userGuessAll = [];
                guessesAll.innerText = "";
                guessesRemaining.innerText = 13;
                currentword.innerText = "_  _  _  _  _  _";
            }
        }   
    frmloss.innerText = losses
    frmwin.innerText = wins

}

$("#click-hint").on("click",function(){

    //checks to see if the hint label already exists on the page
    if($("#hint-label").length){
        //does nothing if the elements for the hint already exist 
    }else{
            var hint = $("<p>");
            var hintText = $("<p>");

            hint.text("Hint:");
            hint.attr("id","hint-label")

            $("#hint-opt").append(hint);

            hint.attr("class","lbl-hint")
            hintText.attr("id","hint-content")

            if(ghosthint.textContent =="hitter"){
                hintText.txt("That guy is hitting bombs in batting practice, he looks like a good ______ .")
                $("#hint-opt").append(hintText);
            }
            else if (ghosthint.textContent == "helmet"){
                hintText.text("I have to bat, have you seen my  _______ .")
                $("#hint-opt").append(hintText);
            }
            else if (ghosthint.textContent == "lineup"){
                hintText.text("I hope coach puts me in the ________ .")
                $("#hint-opt").append(hintText);
            }
            else if (ghosthint.textContent == "stolen"){
                hintText.text("The runner has  _______ second base.")
                $("#hint-opt").append(hintText);
            }
            else if (ghosthint.textContent == "strike"){
                hintText.text("Get this pitched out of here, he can't throw a  _____ .")
                $("#hint-opt").append(hintText);
            }
            else if (ghosthint.textContent == "triple"){
                hintText.text("If the batter hit a ball and ended up on third, he hit a _____ .")
                $("#hint-opt").append(hintText);
            }
            else if (ghosthint.textContent == "umpire"){
                hintText.text("This guys calls balls and strikes")
                $("#hint-opt").append(hintText);
            }
            else if (ghosthint.textContent == "piazza"){
                hintText.text("Greatest NY Mets catcher of all time")
                $("#hint-opt").append(hintText);
            }
            else{
                hintText.text("Press any key to play the game!")
                $("#hint-opt").append(hintText);
            }
    }
    
    
});


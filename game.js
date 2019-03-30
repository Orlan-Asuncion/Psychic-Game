
    //initialize array of letters
<script>
var Alphabeth = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// variables to track wins/loss.

var wins= 0;
var losses= 0;
var guessesLeft = 9;
var yourGuesses = [];

//This function runs when user presses a key.
document.onkeyup = function(event){
//Determines which key was pressed.
  userGuess = event.key;
guessedLetters.push(yourGuess);
//Randomly chooses a  choice from the option array.
var computerChoice = Alphabeth[math.floor(Math.random()* Alphabeth.length)];
    
    if(userGuess === computerChoice){
        wins++;
        guessesLeft = 8;
      
    }
    else(userGuess !== computerGuess){
        guessesLeft--;
        yourGuesses.push(userGuess);
    }
    if (guessesLeft ===0) {
        youLose++
        guessesLeft = 9;
    }   

     var html = 
     "<h1> The Psychic Game </h1>" +
     "<h3>Guess what letter I'm thinking of!</h3>" +
     "<p>Wins: " + wins + "</p>" +
     "<p>Losses: " + losses + "</p>" +
     "<p>Guesses Left: " + numGuesses + "</p>" +
     "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>
     
    document.getElementById("results").innerHTML = html;
    Display the user and computer guesses, and wins/losses/ties
    winsText.textContent = 'Wins:' +wins;
    lossesText.textContent = "Losses:" + losses;
    guessesLeftText.textContent = "Guesses Lef:t" + guessesLeft;
    yourGuessesText.textcontent ="Your guesses so far: + yourGuesses;
}

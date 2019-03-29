// Alphabet

var alphabet = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
    ];

// html visible variables

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerGuess);

// Variables to hold references to the places in HTML for display
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var leftText = document.getElementById("left-text");
var sofarText = document.getElementById("sofar-text");

// Key Press Function

document.onkeyup = function(event) {


    //Makes the key presses lowercase----?
    var userGuess = event.key.toLowerCase();

    if(alphabet.indexOf(userGuess) === -1){
        return
    }

    if(lettersGuessed.indexOf(userGuess) !== -1){
        return
    }

    lettersGuessed.push(userGuess)

    //Displays letters guessed
    document.getElementById("letter-guessed").innerHTML = lettersGuessed;

    //If's for when a letter is pressed
    if ((userGuess === computerGuess) && (guessesLeft > 1)){
        wins++;
        winsText.innerHTML = wins;
        guessesLeft = 9;
        leftText.innerHTML = 9;
        lettersGuessed = [];
        document.getElementById("letter-guessed").innerHTML = lettersGuessed;
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerGuess);
    }
    else if ((userGuess !== computerGuess) && (guessesLeft > 1)){
        guessesLeft--;
        leftText.innerHTML = guessesLeft;
    }
    else {
        console.log("finalisrunning")
        losses++;
        lossesText.innerHTML = losses;
        lettersGuessed = [];
        document.getElementById("letter-guessed").innerHTML = lettersGuessed;
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerGuess);
        guessesLeft = 9;
        leftText.innerHTML = 9;
    }

    //Updates html after function is called
    // winsText.textContent = "Wins: " + wins;
    // lossesText.textContent = "Losses: " + losses;
    // leftText.textContent = "Guesses Left: " + guessesLeft;
    // sofarText.textContent = "Your Guesses so far: " + lettersGuessed;



}


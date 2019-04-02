// Creates Alphabet Array

var alphabet = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
    ];

// creates html visible variables and letters guessed array for key clicks

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];

//generates random letter pulled from alphabet array
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerGuess);

// Variables to hold references to the places in HTML for display
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var leftText = document.getElementById("left-text");
var sofarText = document.getElementById("sofar-text");

// Key Press Function

document.onkeyup = function(event) {


    //creates variable for user key press and sets to lowercase to be valid
    var userGuess = event.key.toLowerCase();


    //prevents special characters from being inputted by only allowing alphabet array objects to be used
    if(alphabet.indexOf(userGuess) === -1){

        //stops all functions until a new key is pressed
        return
    }

    //prevents characters already guessed from being put into guess array
    if(lettersGuessed.indexOf(userGuess) !== -1){
        
        //stops all functions til a new key is pressed 
        return
    }
    
    //pushes buttons pressed to letters guessed array 
    lettersGuessed.push(userGuess)

    //Displays letters guessed
    document.getElementById("letter-guessed").innerHTML = lettersGuessed;


//Logic for when a letter is pressed//

    //Runs if the game is won

    //the letter guessed is equal to the computer's number if the amount of guesses left is above 0
    if ((userGuess === computerGuess) && (guessesLeft > 1)){

        //adds a win to the wins variable
        wins++;

        //pushes the added win to the DOM
        winsText.innerHTML = wins;

        //resets the guesses left to 9 for a new game
        guessesLeft = 9;

        //pushes the guesses left to the DOM
        leftText.innerHTML = 9;

        //clears the lettersguess array
        lettersGuessed = [];

        //pushes the reset lettersguess array to the DOM
        document.getElementById("letter-guessed").innerHTML = lettersGuessed;

        //generates a new number for the computers guess
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

        //logs the new computers guess
        console.log(computerGuess);
    }

    //runs if a letter pressed is incorrect and if guess count is above 0
    else if ((userGuess !== computerGuess) && (guessesLeft > 1)){

        //removes one guess left from the guesses left variable
        guessesLeft--;

        //pushes the removal of one guess to the DOM
        leftText.innerHTML = guessesLeft;
    }

    //runs if the game is lost, guesses left equals zero
    else {

        //logs that the game ending function is working
        console.log("finalisrunning")

        //adding a loss to the losses variable count
        losses++;

        //pushing loss to the DOM
        lossesText.innerHTML = losses;

        //resets the lettersguessed array to empty
        lettersGuessed = [];

        //pushes the reset of the above array to the DOM
        document.getElementById("letter-guessed").innerHTML = lettersGuessed;

        //generates a new computer letter to guess from the alphabet array
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

        // logs the computers guess
        console.log(computerGuess);

        //resets the guesses left count to 9 for a new game
        guessesLeft = 9;

        //pushes the guesses left to the DOM
        leftText.innerHTML = 9;
    }


}


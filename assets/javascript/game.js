//Variables and arrays
var pokemon = [
    "Squirtle",
    "Pikachu",
    "Seel"
];

var randomPokemon = "";
var lettersInPokemon = []
var blanks = 0;
var blanksWithGuesses = [];
var wrongGuess = [];

var wins = 0;
var guessesLeft = 10;

//Functions


//Global function
function Game() {
    //Select random Pokemon word
    randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
    lettersInPokemon = randomPokemon.split("");
    blanks = lettersInPokemon.length;

    for (var i = 0; i < blanks; i++) {
        blanksWithGuesses.push("_");
    }

    document.getElementById("whos-that-text").innerHTML = " " + blanksWithGuesses.join(" ");

    //testing with console.log
    console.log(randomPokemon);
    console.log(lettersInPokemon);
    console.log(blanks);
}

//Function to set a blank image to be guessed
function blankImage() {
    //Squirtle
    if (randomPokemon === pokemon[0]) {
        document.getElementById(".image").src = "./assets/images/BlankSquirtle.jpg";
    }

    //Pikachu
    else if (randomPokemon === pokemon[1]) {
        document.getElementById(".image").src = "./assets/images/BlankPikachu.jpg";
    }

    //Seel
    else if (randomPokemon === pokemon[2]){
        document.getElementById(".image").src = "./assets/images/BlankSeel.jpg";
    }

}

//Reset function for when game is won/lost
function reset() {
    guessesLeft = 10;
    wrongGuess = [];
    blanksWithGuesses = [];
    Game()
}

//Functions to determine letters in the Pokemon chosen

function checkGuess(letter) {
    var letterInGuess = false;
    for (var i=0; i < blanks; i++) {
        if (randomPokemon[i] == letter) {
            letterInGuess = true;
        }
    }

    if (letterInGuess) {
        for (var i = 0; i < blanks; i++) {
            if (randomPokemon[i] == letter) {
                blanksWithGuesses[i] = letter;
            }
        }
    }

    else {
        wrongGuess.push(letter);
        guessesLeft--;
    }
}

//Wins and losses functions - show full Pokemon image

function endGame() {
    if (lettersInPokemon.toString() == blanksWithGuesses.toString()) {
        wins++;
        if (randomPokemon === pokemon[0]) {
            document.getElementById("image").src= "./assets/images/Squirtle.jpg";
        }
        if (randomPokemon === pokemon[1]) {
            document.getElementById("image").src = "./assets/images/Pikachu.jpg";
        }
        if (randomPokemon === pokemon[2]) {
            document.getElementById("image").src = "./assets/images/Seel.jpg";
        }
        reset()
    }

    else if (guessesLeft === 0) {
        losses++;
        reset()
    }
}

//Calling the function, adding functions to check which keys are pressed
Game()

document.onkeyup = function (event) {
    var guesses = event.key.toLowerCase();
    checkGuess(guesses);
    endGame();

    console.log(guesses);

    document.getElementById("letters-guessed-text").innerHTML = " " + wrongGuess.join(" ");
}


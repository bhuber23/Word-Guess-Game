//Variables and arrays
var pokemon = [
    "Squirtle",
    "Pikachu",
    "Seel",
    "Mewtwo",
    "Dragonair",
    "Togepi",
    "Charmander",
    "Charizard",
    "Psyduck",
    "Clefairy",
];

var randomPokemon = "";
var lettersInPokemon = []
var blanks = 0;
var blanksWithGuesses = [];
var lettersGuessed = [];


var wins = 0;
var losses = 0;
var guessesLeft = 6;

//Functions


//Global function
function game() {
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
    
    blankImage();

    document.getElementById("reset").onclick = function() {
        reset();
    }
}

//Function to set a blank image to be guessed
function blankImage() {
    //Squirtle
    if (randomPokemon === pokemon[0]) {
        document.getElementById("image").src = "./assets/images/BlankSquirtle.jpg";
    }
    

    //Pikachu
    else if (randomPokemon === pokemon[1]) {
        document.getElementById("image").src = "./assets/images/BlankPikachu.jpg";
    }

    //Seel
    else if (randomPokemon === pokemon[2]){
        document.getElementById("image").src = "./assets/images/BlankSeel.png";
    }
    //Mewtwo
    else if (randomPokemon === pokemon[3]){
        document.getElementById("image").src = "./assets/images/BlankMewtwo.jpg";
    }
    //Dragonair
    else if (randomPokemon === pokemon[4]){
        document.getElementById("image").src = "./assets/images/BlankDragonair.png";
    }
    //Togepi
    else if (randomPokemon === pokemon[5]){
        document.getElementById("image").src = "./assets/images/BlankTogepi.png";
    }
    //Charmander
    else if (randomPokemon === pokemon[6]){
        document.getElementById("image").src = "./assets/images/BlankCharmander.jpeg";
    }
    //Charizard
    else if (randomPokemon === pokemon[7]){
        document.getElementById("image").src = "./assets/images/BlankCharizard.jpg";
    }
    //Psyduck
    else if (randomPokemon === pokemon[8]){
        document.getElementById("image").src = "./assets/images/BlankPsyduck.png";
    }
    //Clefairy
    else if (randomPokemon === pokemon[9]){
        document.getElementById("image").src = "./assets/images/BlankClefairy.jpg";
    }
    
}


//Reset function for when game is won/lost
function reset() {
    guessesLeft = 6;
    lettersGuessed = [];
    blanksWithGuesses = [];
    game()
}

//Functions to determine letters in the Pokemon chosen

function checkGuess(letter) {
    var letterInGuess = false;
    if (!lettersGuessed.includes(letter)){

        for (var i=0; i < blanks; i++) {
            if (randomPokemon[i].toLowerCase() == letter) {
                letterInGuess = true;
            }
        }

        if (letterInGuess) {
            for (var i = 0; i < blanks; i++) {
                if (randomPokemon[i].toLowerCase() == letter) {
                    blanksWithGuesses[i] = letter;
                }
            }
        }

        else {
            lettersGuessed.push(letter);
            guessesLeft--;
        }
}}
console.log(checkGuess);
console.log(blanksWithGuesses);

//Wins and losses functions - show full Pokemon image

function endGame() {
    if (lettersInPokemon.toString().toLowerCase() == blanksWithGuesses.toString()) {
        wins++;
        document.getElementById("whos-that-text").innerHTML = " " + blanksWithGuesses.join(" ");
        if (randomPokemon === pokemon[0]) {
            document.getElementById("image").src= "./assets/images/Squirtle.png";
        }
        if (randomPokemon === pokemon[1]) {
            document.getElementById("image").src = "./assets/images/Pikachu.jpg";
        }
        if (randomPokemon === pokemon[2]) {
            document.getElementById("image").src = "./assets/images/Seel.png";
        }
        if (randomPokemon === pokemon[3]) {
            document.getElementById("image").src = "./assets/images/Mewtwo.jpg";
        }
        if (randomPokemon === pokemon[4]) {
            document.getElementById("image").src = "./assets/images/Dragonair.png";
        }
        if (randomPokemon === pokemon[5]) {
            document.getElementById("image").src = "./assets/images/Togepi.png";
        }
        if (randomPokemon === pokemon[6]) {
            document.getElementById("image").src = "./assets/images/Charmander.jpeg";
        }
        if (randomPokemon === pokemon[7]) {
            document.getElementById("image").src = "./assets/images/Charizard.png";
        }
        if (randomPokemon === pokemon[8]) {
            document.getElementById("image").src = "./assets/images/Psyduck.jpg";
        }
        if (randomPokemon === pokemon[9]) {
            document.getElementById("image").src = "./assets/images/Clefairy.png";
        }

       
        document.getElementById("wins-text").innerHTML = " " + wins;
        
    }

    else if (guessesLeft === 0) {
        losses++;
        document.getElementById("losses-text").innerHTML = " " + losses;
        reset();
    }
    document.getElementById("whos-that-text").innerHTML = " " + blanksWithGuesses.join(" ");
    document.getElementById("guesses-remaining-text").innerHTML = " " + guessesLeft;
}

console.log(endGame);

//Calling the function, adding functions to check which keys are pressed
game()

document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();
    checkGuess(letter);
    endGame();

    console.log(letter);

    document.getElementById("letters-guessed-text").innerHTML = " " + lettersGuessed.join(" ");
}


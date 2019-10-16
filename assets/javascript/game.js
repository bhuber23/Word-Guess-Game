//Define the array
var pokemon = [
    "Squirtle",
    "Pikachu",
    "Clefairy"

];


//Page gives a blacked out Pokemon image and displays the number of characters in the Pokemon's name
function choosePokemon() {
    var pokemonChoice = Math.floor(Math.random() * pokemon.length);
    return pokemon[pokemonChoice];
}

function wordLength(pokemonWord) {
    var answerArray = [];
    for (var i = 0; i < pokemonWord.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
}

console.log(wordLength(choosePokemon()));





//User presses keys to enter their guesses for who the Pokemon is. The app records the choices they get correct and keeps track of the letters they've guessed





//The app awards users 6 missed letters before the game is over. The app counts down their guesses remaining






//When all the letters have been guessed correctly, the image will turn to the actual image of the Pokemon

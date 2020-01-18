console.log("Thank you for playing!");

//variable declaration for the game scores
var wins = 0;
var lost = 0;
var lettersUsed = [];
var livesLeft = 10;

playGame = () => {
    document.querySelector("#livesLeft").innerHTML = "You have " + livesLeft + " lives left!";
    document.querySelector("#lettersUsed").innerHTML = "You guessed letters: " + lettersUsed.join(", ");
    document.querySelector("#wins").innerHTML = "You have guessed " + wins + " words right!";
    document.querySelector("#lost").innerHTML = "You have died " + lost + " times...";

    //array of words to chose from (animals)
    var words = ["cat", "dog", "horse", "fish", "piranha", "turtle", "snake", "lion", "tiger", "panda", "aligator",
        "shark", "elephant", "cow", "chicken", "fox", "flamingo", "whale", "lizard", "bear", "sheep", "bird", "wolf",
        "spider", "mosquito", "bee", "raccoon", "bat", "owl", "rabiit", "rat", "mice", "otter", "monkey", "mouse",
        "bobcat", "salamander", "rhinoceros", "opossum", "dolphin", "lynx", "zebra", "iguana", "anteater", "hyena", "koala",
        "jellyfish", "ostrich", "panther", "pigeon", "pig", "reindeer", ""];

    //function that returns a random index from the array, that then becomes the
    //  word the user needs to guess. 
    var word = words[Math.floor(Math.random() * words.length)];
    console.log("The word to be guessed is: " + word);

    //sets up an array to show how many letters there are in the chosen word by using _'s
    var answer = [];
    for (var i = 0; i < word.length; i++) {
        answer[i] = " _ ";
        console.log(answer);
        document.querySelector("#spaces").innerHTML = "Your word is:   " + answer;
    }

    //======================Game Logic =====================================================
    document.onkeydown =()=> {
        var letter = event.key.toLowerCase();
        lettersUsed.push(letter);
        updateUserLettersGuessed();

        //creates a variable to hold the number of remaining letters to be guessed.
        var remainingLetters = word.length;
        console.log(remainingLetters);
        
    }
    //======================================================================================

}
// //main game loop

// while (remainingLetters > 0) {
//     //show the player their progress
//     alert(answer.join(""));
//     //get a guess from the player
//     var guess = prompt ("guess a letter or click Cancel to stop playing");
//     //if guess is blank
//     if (guess == null) { 
//         break;
//     //if the guess is more than one letter or no letters
//     }else if (guess.length !== 1){
//         alert("Please enter a single letter.");
//     //valid guess
//     } else {
//         //update the game state with the guess
//         for (var j=0; j<word.length; j++) {
//             //if the letter they guessed is in the word at that point or index
//             if(word[j] === guess) {
//                 //update the answer array with the letter they guessed at that point or index
//                 answer[j] = guess;
//                 //substract one from remaining letters
//                 remainingLetters--;
//             }
//         }
//     }
//     //-----------end of main game loop--------------------------
// }
// //let player know the word
// alert(answer.join(" "));
// alert("Good job! The answer was: " + word);

//function that keeps tack of letters user pressed and displays them on the DOM
updateUserLettersGuessed = ()=> {
    document.querySelector("#lettersUsed").innerHTML = "You guessed letters: " + lettersUsed.join(", ");
}

//function that shows users their progress when guessed right

quitGame = () => {
    livesLeft = 10;
    lettersUsed = [];
    wins = 0;
    lost++;
    document.querySelector("#livesLeft").innerHTML = "You have " + livesLeft + " lives left!";
    document.querySelector("#lettersUsed").innerHTML = "You guessed letters: " + lettersUsed;
    document.querySelector("#wins").innerHTML = "You have guessed " + wins + " words right!";
    document.querySelector("#lost").innerHTML = "You have died " + lost + " times...";
    playGame();
}

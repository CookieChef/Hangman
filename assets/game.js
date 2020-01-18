console.log("Thank you for playing!");
lettersUsed =[];
playGame = () => {
    // randomWord();
    userKeyPress();

}

quitGame = () => {

}

//generates a random word
var randomWord = function () {
    var words = ["cat", "dog", "horse", "fish", "piranha", "turtle", "snake", "lion", "tiger", "panda", "aligator",
        "shark", "elephant", "cow", "chicken", "fox", "flamingo", "whale", "lizard", "bear", "sheep", "bird", "wolf",
        "spider", "mosquito", "bee", "raccoon", "bat", "owl", "rabbit", "rat", "mice", "otter", "monkey", "mouse",
        "bobcat", "salamander", "rhinoceros", "opossum", "dolphin", "lynx", "zebra", "iguana", "anteater", "hyena", "koala",
        "jellyfish", "ostrich", "panther", "pigeon", "pig", "reindeer", ""];

    var word = words[Math.floor(Math.random() * words.length)];
    console.log("The word to be guessed is: " + word);
    //makes the space for the randomly chosen word and displays them in the DOM
    var answer = [];
    for (var i = 0; i < word.length; i++) {
        answer[i] = " _ ";
        //console.log(answer);
        document.querySelector("#spaces").innerHTML = "Your word is:   " + (answer.join(" ")); 
    }

 
}

//takes the letter the user pressed on and pushes it into an array to display the letters the user already used. 
userKeyPress = function () {
    document.onkeydown = () => {
        var letter = event.key.toLowerCase();
        lettersUsed.push(letter);
        document.querySelector("#lettersUsed").innerHTML = "You guessed letters: " + lettersUsed.join(", ");
    }
    randomWord();
  
}
//variable declaration for the game scores
// var wins = 0;
// var lost = 0;
// var lettersUsed = [];
// var livesLeft = 10;


// playGame = () => {
//     lettersUsed=[];
//     document.querySelector("#livesLeft").innerHTML = "You have " + livesLeft + " lives left!";
//     document.querySelector("#lettersUsed").innerHTML = "You guessed letters: " + lettersUsed.join(", ");
//     document.querySelector("#wins").innerHTML = "You have guessed " + wins + " words right!";
//     document.querySelector("#lost").innerHTML = "You have died " + lost + " times...";

//     //array of words to chose from (animals)
//     var words = ["cat", "dog", "horse", "fish", "piranha", "turtle", "snake", "lion", "tiger", "panda", "aligator",
//         "shark", "elephant", "cow", "chicken", "fox", "flamingo", "whale", "lizard", "bear", "sheep", "bird", "wolf",
//         "spider", "mosquito", "bee", "raccoon", "bat", "owl", "rabbit", "rat", "mice", "otter", "monkey", "mouse",
//         "bobcat", "salamander", "rhinoceros", "opossum", "dolphin", "lynx", "zebra", "iguana", "anteater", "hyena", "koala",
//         "jellyfish", "ostrich", "panther", "pigeon", "pig", "reindeer", ""];

//     //function that returns a random index from the array, that then becomes the
//     //  word the user needs to guess. 
//     var word = words[Math.floor(Math.random() * words.length)];
//     console.log("The word to be guessed is: " + word);

//     //sets up an array to show how many letters there are in the chosen word by using _'s
//     var answer = [];
//     for (var i = 0; i < word.length; i++) {
//         answer[i] = " _ ";
//         console.log(answer);
//         document.querySelector("#spaces").innerHTML = "Your word is:   " + answer;
//     }

    //======================Game Logic =====================================================
    // document.onkeydown = () => {
    //     var letter = event.key.toLowerCase();
    //     lettersUsed.push(letter);
    //     updateUserLettersGuessed();

    //     var remainingLetters = word.length;

    //     while (livesLeft>0 && remainingLetters>0) {
    //         for (var j=0; j<word.length; j++) {
    //             if(word[j] === letter) {
    //                 answer[j] = letter; 
    //                 remainingLetters--;
    //                 document.querySelector("#spaces").innerHTML = "Your word is:   " + (answer.join(" "));                
    //             }else if (remainingLetters===0 && livesLeft>0) { 
    //                 wins++;                  
    //                 document.querySelector("#livesLeft").innerHTML = "You have " + livesLeft + " lives left!";

    //             }
    //         }
    //     }
    //     //creates a variable to hold the number of remaining letters to be guessed.
    //     var remainingLetters = word.length;
    //     while (remainingLetters>0) {

    //      var guess = prompt("Guess a letter");
    //         if (guess == null) {
    //             break;
    //         }else if (guess.length !== 1) {
    //             console.log("guess again, wrong input");
    //         }else {
    //             for (var j=0; j<word.length; j++) {
    //                 if(word[j] === guess) {
    //                     answer[j] = guess;
    //                     remainingLetters--;
    //                     document.querySelector("#spaces").innerHTML = "Your word is:   " + (answer.join(" "));
    //                     document.querySelector("#congrats").innerHTML = "Good job! You guessed " + word + " correctly";
    //                     wins++;
    //                 }
    //             }
    //         }
    //     }

//     }
// }
    //======================================================================================

//function that keeps tack of letters user pressed and displays them on the DOM
// updateUserLettersGuessed = () => {
//     document.querySelector("#lettersUsed").innerHTML = "You guessed letters: " + lettersUsed.join(", ");
// }

// //function that shows users their progress when guessed right

// quitGame = () => {
//     livesLeft = 10;
//     lettersUsed = [];
//     wins = 0;
//     lost++;
//     document.querySelector("#livesLeft").innerHTML = "You have " + livesLeft + " lives left!";
//     document.querySelector("#lettersUsed").innerHTML = "You guessed letters: " + lettersUsed;
//     document.querySelector("#wins").innerHTML = "You have guessed " + wins + " words right!";
//     document.querySelector("#lost").innerHTML = "You have died " + lost + " times...";
//     playGame();
// }

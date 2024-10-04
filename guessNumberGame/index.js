let correctAnswer = Math.floor(Math.random() * 101);
let tries = 0;
const randomNum = document.getElementById("randomNum");
const guessButton = document.getElementById("guessButton");
const display = document.getElementById("display");
const submitButton = document.getElementById("submitButton");
const displayAttempt = document.getElementById("displayAttempt");
const tryOptions = document.getElementById("tryOptions");

randomNum.hidden = true;
guessButton.hidden = true;

//starts the game and erases all previous attempts
function startGame() {
   display.innerHTML = "";
   randomNum.hidden = true;
   submitButton.hidden = true;

   tryOptions.innerHTML = `
      <button onclick="setMaxTries(20)">20 Tries</button>
      <button onclick="setMaxTries(15)">15 Tries</button>
      <button onclick="setMaxTries(10)">10 Tries</button>
      <button onclick="setMaxTries(5)">5 Tries</button>
   `;
}

//sets the max number of tries for the game
function setMaxTries(maxTries) {
   randomNum.hidden = false;
   guessButton.hidden = false;
   tryOptions.hidden = true;
   displayAttempt.innerHTML = `${maxTries} TRIES MAX`;

   guessButton.onclick = () => {
      guessNumber(maxTries);
   };
}

//guesses the number and checks if it's correct
function guessNumber(maxTries) {
   const guessValue = randomNum.value.trim();
//increases the number of tries by 1 per click
   tries++;

   if (tries >= maxTries + 1) {
      display.innerHTML = `<h3 style='color: #dc3545;'>YOU LOST! <h5 style='color: green;'>THE ANSWER WAS ${correctAnswer}</h5><br><button onclick="resetGame()">PLAY AGAIN</button></h3>`;
      guessButton.hidden = true;
      randomNum.hidden = true;
      return;
   }

//this is a ternary operator dont get confused
   guessValue === ""
      ? (display.innerHTML = `PLEASE ENTER A NUMBER`)
      : isNaN(guessValue)
      ? (display.innerHTML = `NUMBER ONLY!`)
      : guessValue < 1 || guessValue > 100
      ? (display.innerHTML = `NUMBER BETWEEN 1-100 ONLY!`)
      : guessValue < correctAnswer
      ? (display.innerHTML = `THE NUMBER IS TOO LOW.`)
      : guessValue > correctAnswer
      ? (display.innerHTML = `THE NUMBER IS TOO HIGH.`)
      : ((display.innerHTML = `<h3 style='color: #28a745;'>YOU WIN! CONGRATULATIONS!!!<br><button onclick="resetGame()">PLAY AGAIN</button></h3>`),
        (guessButton.hidden = true),
        (randomNum.hidden = true));

   randomNum.value = "";
   displayAttempt.innerHTML = `TRIES: ${tries} / ${maxTries}`;
}

//resets the game back to the options
function resetGame() {
   correctAnswer = Math.floor(Math.random() * 101);
   tries = 0;
   display.innerHTML = "";
   displayAttempt.innerHTML = "";
   tryOptions.hidden = false;
   randomNum.hidden = true;
   guessButton.hidden = true;
}

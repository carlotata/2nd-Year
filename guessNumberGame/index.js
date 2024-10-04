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

function setMaxTries(maxTries) {
   tries = 0;
   randomNum.hidden = false;
   guessButton.hidden = false;
   tryOptions.hidden = true;
   displayAttempt.innerHTML = `${maxTries} TRIES MAX`;

   guessButton.onclick = () => {
      guessNumber(maxTries);
   };
}

function guessNumber(maxTries) {
   const guessValue = randomNum.value.trim();
   tries++;

   if (tries >= maxTries + 1) {
      display.innerHTML = `<h3 style='color: #dc3545;'>YOU LOST! <h5 style='color: green;'>THE ANSWER WAS ${correctAnswer}</h5><br><button onclick="resetGame()">PLAY AGAIN</button></h3>`;
      guessButton.hidden = true;
      randomNum.hidden = true;
      return;
   }

   if (guessValue === "") {
      display.innerHTML = `PLEASE ENTER A NUMBER`;
   } else if (isNaN(guessValue)) {
      display.innerHTML = `NUMBER ONLY!`;
   } else if (guessValue < 1 || guessValue > 100) {
      display.innerHTML = `NUMBER BETWEEN 1-100 ONLY!`;
   } else if (guessValue === correctAnswer) {
      display.innerHTML = `<h3 style='color: #28a745;'>YOU WIN! CONGRATULATIONS!!!<br><button onclick="resetGame()">PLAY AGAIN</button></h3>`;
      guessButton.hidden = true;
      randomNum.hidden = true;
   } else if (guessValue < correctAnswer) {
      display.innerHTML = `THE NUMBER IS TOO LOW.`;
   } else {
      display.innerHTML = `THE NUMBER IS TOO HIGH.`;
   }

   randomNum.value = "";
   displayAttempt.innerHTML = `TRIES: ${tries} / ${maxTries}`;
}

function resetGame() {
   correctAnswer = Math.floor(Math.random() * 101);
   tries = 0;
   display.innerHTML = "";
   displayAttempt.innerHTML = "";
   tryOptions.hidden = false;
   randomNum.hidden = true;
   guessButton.hidden = true;
}

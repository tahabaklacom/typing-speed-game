const words = [
  "apple", "banana", "orange", "grape", "pineapple", "car", "train", "river", "mountain", "cloud",
  "storm", "flower", "guitar", "school", "notebook", "pencil", "window", "planet", "mouse", "keyboard",
  "street", "coffee", "butter", "mirror", "shadow", "forest", "ocean", "silver", "dragon", "castle"
];

const wordEl = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const gameContainer = document.getElementById("game-container");

let currentWord;
let score = 0;
let time = 10;

text.focus();

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM() {
  currentWord = getRandomWord();
  wordEl.innerHTML = currentWord;
}

function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

function updateTime() {
  time--;
  timeEl.innerHTML = time;
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  gameContainer.style.display = "none";
  endgameEl.style.display = "block";
  document.getElementById("final-score").innerText = score;
}

addWordToDOM();

text.addEventListener("input", () => {
  if (text.value.toLowerCase() === currentWord.toLowerCase()) {
    addWordToDOM();
    updateScore();
    text.value = "";
    time += 2; 
  }
});
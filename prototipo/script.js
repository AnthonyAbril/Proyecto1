// Lista de palabras
const words = ["teclado", "javascript", "desarrollo", "pantalla", "internet", "computadora", "programa", "codigo", "html", "css"];

// Variables
let currentWord = "";
let score = 0;
let time = 0;
let timerInterval;
let gameStarted = false;

// Elementos del DOM
const wordDisplay = document.getElementById("word");
const inputWord = document.getElementById("inputWord");
const startBtn = document.getElementById("startBtn");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

// Iniciar el juego
startBtn.addEventListener("click", startGame);

inputWord.addEventListener("input", checkInput);

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        score = 0;
        time = 0;
        inputWord.disabled = false;
        inputWord.value = "";
        inputWord.focus();
        startBtn.textContent = "Reiniciar";
        updateWord();
        startTimer();
    } else {
        resetGame();
    }
}

function updateWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    wordDisplay.textContent = currentWord;
}

function checkInput() {
    if (inputWord.value === currentWord) {
        score++;
        scoreDisplay.textContent = `Puntaje: ${score}`;
        inputWord.value = "";
        updateWord();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        time++;
        timeDisplay.textContent = `Tiempo: ${time} s`;
    }, 1000);
}

function resetGame() {
    clearInterval(timerInterval);
    gameStarted = false;
    timeDisplay.textContent = "Tiempo: 0 s";
    scoreDisplay.textContent = "Puntaje: 0";
    wordDisplay.textContent = 'Presiona "Iniciar" para empezar';
    inputWord.value = "";
    inputWord.disabled = true;
    startBtn.textContent = "Iniciar";
}

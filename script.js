const colorBox = document.querySelector('[data-testid="colorBox"]');
const colorOptions = document.querySelector(".color-options");
const gameStatus = document.querySelector('[data-testid="gameStatus"]');
const scoreElement = document.querySelector('[data-testid="score"]');
const newGameButton = document.querySelector('[data-testid="newGameButton"]');

let score = 0;
let targetColor;

// set of colors
const colors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FFA500",
  "#800080",
  "#008000",
  "#000080",
  "#800000",
  "#008080",
];

// Function to generate a random color from the predefined set
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Function to start a new game
function startNewGame() {
  targetColor = getRandomColor();
  colorBox.style.backgroundColor = targetColor;
  gameStatus.textContent = "";
  renderColorOptions();
}

// Function to render color options
function renderColorOptions() {
  colorOptions.innerHTML = "";
  const options = [
    targetColor,
    ...Array(5)
      .fill()
      .map(() => getRandomColor()),
  ];
  options.sort(() => Math.random() - 0.5);

  options.forEach((color) => {
    const button = document.createElement("button");
    button.style.backgroundColor = color;
    button.addEventListener("click", () => handleGuess(color));
    colorOptions.appendChild(button);
  });
}

// Function to handle user's guess
function handleGuess(guess) {
  if (guess === targetColor) {
    gameStatus.textContent = "Correct!";
    score++;
    scoreElement.textContent = score;
    startNewGame();
  } else {
    gameStatus.textContent = "Wrong! Try again.";
  }
}

// Event listener for the new game button
newGameButton.addEventListener("click", () => {
  score = 0;
  scoreElement.textContent = score;
  startNewGame();
});

// Initialize the game
startNewGame();

// Selecting the scores
const p1score = document.querySelector(".p1score");
const p2score = document.querySelector(".p2score");

// Selecting the input

const winningScoreSelect = document.querySelector("#playTo");

// Selecting the buttons
const p1button = document.querySelector(".p1button");
const p2button = document.querySelector(".p2button");
const resetButton = document.querySelector(".resetButton");

let p1TotalScore = 0;
let p2TotalScore = 0;
let winningScore = 3;
let isGameOver = false;

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
});

// connecting the buttons to the scores
p1button.addEventListener("click", () => {
  if (!isGameOver) {
    p1TotalScore += 1;

    if (p1TotalScore === winningScore) {
      isGameOver = true;
      p1score.classList.add("winning-score");
      p2score.classList.add("losing-score");
    }
  }
  p1score.innerText = p1TotalScore;
});

p2button.addEventListener("click", () => {
  if (!isGameOver) {
    p2TotalScore += 1;
    if (p2TotalScore === winningScore) {
      isGameOver = true;
      p2score.classList.add("winning-score");
      p1score.classList.add("losing-score");
    }
    p2score.innerText = p2TotalScore;
  }
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  p1TotalScore = 0;
  p2TotalScore = 0;
  p1score.innerText = 0;
  p2score.innerText = 0;
  winningScore = 3;
  resetColors();
}

function resetColors() {
  p1score.classList.remove("winning-score", "losing-score");
  p2score.classList.remove("winning-score", "losing-score");
}

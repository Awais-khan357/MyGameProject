let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscores = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing....");
    document.querySelector(".score").textContent = 20;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = " ";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "30rem";
  });

  if (!guess) {
    displayMessage("No Number!");
  } else if (guess == secretNumber) {
    if (score > highscores) {
      highscores = score;
      document.querySelector(".highscore").textContent = highscores;
    }
    displayMessage("You are Correct");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? "Too high" : "too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game");
    }
  }
});

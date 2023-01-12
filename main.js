const cells = document.querySelectorAll("td");
const resetButton = document.querySelector("#reset-button");
let currentPlayer = "X";

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

for (const cell of cells) {
  cell.addEventListener("click", function(event) {
    if (event.target.textContent) {
      return;
    }
    event.target.textContent = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";

    checkForWin();
  });
}

resetButton.addEventListener("click", function() {
  resetGame();
});

function checkForWin() {
  for (const combination of winningCombinations) {
    const cell1 = document.querySelector(`#cell-${combination[0]}`);
    const cell2 = document.querySelector(`#cell-${combination[1]}`);
    const cell3 = document.querySelector(`#cell-${combination[2]}`);

    if (
      cell1.textContent === cell2.textContent &&
      cell2.textContent === cell3.textContent &&
      cell1.textContent !== ""
    ) {
      alert(`Player ${cell1.textContent} wins!`);
      highlightWin(cell1, cell2, cell3);
      setTimout(resetGame(), 500);
      resetGame();
      return;
    }
  }

  if (Array.from(cells).every(cell => cell.textContent !== "")) {
    alert("It's a tie!");
    resetGame();
  }
}

function highlightWin(cell1, cell2, cell3) {
  cell1.style.backgroundColor = "red";
  cell2.style.backgroundColor = "red";
  cell3.style.backgroundColor = "red";
  }

function resetGame() {
  for (const cell of cells) {
    cell.textContent = "";
    cell.style.backgroundColor = "";
  }
  currentPlayer = "X";
}

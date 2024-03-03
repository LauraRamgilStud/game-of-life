"use-strict";

const GRID_WIDTH = 40;
const GRID_HEIGHT = 25;
let model = [];

window.addEventListener("load", start);

/* ############## CONTROLLER ################ */
function start() {
  createBoard();
  makeBoardClickable();
  createModel();
  makeButtonClickable();
}

function selectCell(row, col) {
  writeToCell(row, col);
  displayBoard();
}

function startGame() {
  setInterval(() => {
    updateModel();
    displayBoard();
  }, 1000);
}

/* ############## VIEW ################ */

function makeBoardClickable() {
  document.querySelector("#board").addEventListener("click", boardClicked);
}

function makeButtonClickable() {
  document.querySelector("#start-btn").addEventListener("click", startGame);
}

function boardClicked(evt) {
  const cell = evt.target;
  if (cell.classList.contains("cell")) {
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    selectCell(row, col);
  }
}

/* ############## MODEL ################ */

function countNeighbours(row, col) {
  let count = 0;
  // Check row above and row below
  for (let y = -1; y < 2; y++) {
    for (let x = -1; x < 2; x++) {
      if (x !== 0 || y !== 0) {
        const newRow = row + y;
        const newCol = col + x;
        if (
          newRow >= 0 &&
          newRow < GRID_HEIGHT &&
          newCol >= 0 &&
          newCol < GRID_WIDTH
        ) {
          count += readFromCell(newRow, newCol);
        }
      }
    }
  }
  return count;
}

function createBoard() {
  const board = document.querySelector("#board");
  board.style.setProperty("--GRID_WIDTH", GRID_WIDTH);
  for (let row = 0; row < GRID_HEIGHT; row++) {
    for (let col = 0; col < GRID_WIDTH; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-row", row);
      cell.setAttribute("data-col", col);
      board.appendChild(cell);
    }
  }
}

function displayBoard() {
  for (let row = 0; row < GRID_HEIGHT; row++) {
    for (let col = 0; col < GRID_WIDTH; col++) {
      const value = readFromCell(row, col);
      const cell = document.querySelector(
        `[data-row="${row}"][data-col="${col}"]`
      );
      switch (value) {
        case 0:
          cell.style.backgroundColor = "white";
          break;
        case 1:
          cell.style.backgroundColor = "black";
          break;
      }
    }
  }
}

function createModel() {
  for (let row = 0; row < GRID_HEIGHT; row++) {
    const newRow = [];
    for (let col = 0; col < GRID_WIDTH; col++) {
      newRow[col] = 0;
    }
    model[row] = newRow;
  }
}

function writeToCell(row, col) {
  if (model[row][col] === 0) {
    model[row][col] = 1;
  } else if (model[row][col] === 1) {
    model[row][col] = 0;
  }
}

function readFromCell(row, col) {
  return model[row][col];
}

function updateModel() {
  console.log("HEEEEERE");
  const newModel = [];
  for (let row = 0; row < GRID_HEIGHT; row++) {
    const newRow = [];
    for (let col = 0; col < GRID_WIDTH; col++) {
      const neighbours = countNeighbours(row, col);
      if (model[row][col] === 1) {
        if (neighbours < 2 || neighbours > 3) {
          newRow[col] = 0; // cell dies
        } else {
          newRow[col] = 1; // cell lives
        }
      } else {
        if (neighbours === 3) {
          newRow[col] = 1; // Cell is born
        } else {
          newRow[col] = 0; // Cell remains dead
        }
      }
    }
    newModel.push(newRow);
  }
  model = newModel;
}

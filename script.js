/*
const container = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}
*/

let containerDiv = document.querySelector('.container');
let userValue = document.querySelector('#user-number');
let userSubmit = document.querySelector('#user-submit');
let promptText = document.querySelector('#prompt');
let copyInput = document.querySelector('#copy-input');
let clearButton = document.querySelector('#clear-button');

userValue.addEventListener('focus', entryHint);
userValue.addEventListener('keyup', duplicateGrid);
userSubmit.addEventListener('click', makeGrid);
// clearButton.addEventListener('click', clearGrid);

//Run makeGrid and draw functions on page load to make default 16x16 grid
makeGrid();

//Indicate to user the grid size
function duplicateGrid() {
    let userGrid = userValue.value;
    copyInput.textContent = "X " + userGrid;
}

//Entry hint
function entryHint() {
    promptText.textContent = "Enter a number between 2 and 99";
}

//Make nested divs that are organised into a grid with flex
//Invalid entries get warning, default grid 16x16

function makeGrid() {
    let number = userValue.value || 16;
    const container = document.querySelector(".container");
    container.innerHTML = "";

    if (number <= 1 || number > 99 || isNaN(number)) {
        promptText.textContent = "Make sure it is a number between 2 and 99!";
        number = 16;
    }

    const squareSize = 600 / number; //600px, so dynamic sizing

        for (let i = 0; i < number * number; i++) {
            const square = document.createElement("div");
            square.classList.add("square");

            //Set flex and size
            square.style.flex = "0 0 " + squareSize + "px";
            square.style.height = squareSize + "px";

            square.addEventListener("mouseenter", () => {
                square.style.backgroundColor = "grey";
            });

            container.appendChild(square);
        }

        promptText.textContent = "Grid: " + number + " X " + number;

        
}
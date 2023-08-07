const DEFAULT_GRIDSNUM = 16
const container = document.querySelector('#container');
const gridsNumbtn = document.createElement('button');
/* const blackbtn = document.createElement('button');
const rainbowbtn = document.createElement('button'); */

/* let grayScale = ['#FFFFFF', '#E6E6E6', '#CCCCCC', '#B3B3B3', '#999999', '#666666', '#4C4C4C', '#333333', '#191919', '#000000']; */

options.appendChild(gridsNumbtn);
/* options.appendChild(blackbtn);
options.appendChild(rainbowbtn); */

gridsNumbtn.textContent = 'Edit the Number of Grids';
/* blackbtn.textContent = 'Black Mode'
rainbowbtn.textContent = 'Rainbow Mode' */

gridsNumbtn.onclick = updateGridsNumber;
/* blackbtn.onclick = setupGrid(DEFAULT_GRIDSNUM);
rainbowbtn.onclick = setupRainbowGrid(DEFAULT_GRIDSNUM); */

function updateGridsNumber() {
    const gridsNumber = +prompt("number of squares per side (int from 2 to 100):");
    setupGrid(gridsNumber)
}

function setupGrid(gridsNum) {
    clearGrid();
    container.style.gridTemplateColumns = `repeat(${gridsNum}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridsNum}, 1fr)`;
    for (i = 0; i < gridsNum * gridsNum; i++) {
        const gridElement = document.createElement('div');
        container.appendChild(gridElement);
        gridElement.id = 'grid-elements';
        gridElement.addEventListener('mouseover', () => gridElement.style.background = 'black');
    }
}

/* function setupRainbowGrid(gridsNum) {
    clearGrid();
    container.style.gridTemplateColumns = `repeat(${gridsNum}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridsNum}, 1fr)`;
    for (i = 0; i < gridsNum * gridsNum; i++) {
        const gridElement = document.createElement('div');
        container.appendChild(gridElement);
        gridElement.id = 'grid-elements';
        gridElement.addEventListener('mouseover', () => gridElement.style.background = generateColor());
    }
} */

function clearGrid() {
    container.innerHTML = '';
}

function random(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

function generateColor() {
    let rainbowPalette = ['#D9D7F1', '#FFFDDE', '#E7FBBE', '#FFCBCB'];
    let color = random(rainbowPalette)
    return color
}

window.onload = () => setupGrid(DEFAULT_GRIDSNUM);

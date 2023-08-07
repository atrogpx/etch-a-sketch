const DEFAULT_GRIDSNUM = 16
const container = document.querySelector('#container');
const gridsNumbtn = document.createElement('button');
options.appendChild(gridsNumbtn);
gridsNumbtn.textContent = 'Edit the Number of Grids';
gridsNumbtn.onclick = updateGridsNumber;

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
        gridElement.addEventListener('mouseover', () => gridElement.setAttribute('style', 'background: black;'));
    }
}

function clearGrid() {
    container.innerHTML = '';
}

window.onload = () => setupGrid(DEFAULT_GRIDSNUM);

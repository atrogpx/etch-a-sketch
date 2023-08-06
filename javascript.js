const DEFAULT_GRIDSNUM = 16
const container = document.querySelector('#container');
const gridsNumbtn = document.createElement('button');
const clearbtn = document.createElement('button');
options.appendChild(gridsNumbtn);
options.appendChild(clearbtn);
gridsNumbtn.textContent = 'Edit the Number of Grids';
clearbtn.textContent = 'Clear';
gridsNumbtn.onclick = updateGridsNumber;
clearbtn.onclick = () => {
    clearGrid();
    clearbtn.textContent = 'lol';
}

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
        gridElement.addEventListener('mouseover', () => gridElement.setAttribute('style', 'background: pink;'));
    }
}

function clearGrid() {
    container.innerHTML = '';
}

window.onload = () => setupGrid(DEFAULT_GRIDSNUM);

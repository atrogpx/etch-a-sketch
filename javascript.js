const container = document.querySelector('#container');

for (i = 0; i < 256; i++) {
    const gridElement = document.createElement('div');
    container.appendChild(gridElement);
    gridElement.classList.add('grid-elements');
}
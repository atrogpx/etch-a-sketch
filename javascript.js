const container = document.querySelector('#container');

for (i = 0; i < 256; i++) {
    const gridElement = document.createElement('div');
    container.appendChild(gridElement);
    gridElement.id = 'grid-elements';
    gridElement.addEventListener('mouseover', () => gridElement.setAttribute('style', 'background: pink;'));
    gridElement.addEventListener('mouseout', () => gridElement.setAttribute('style', 'background: aqua;'));
}

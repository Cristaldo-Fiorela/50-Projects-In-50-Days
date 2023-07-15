// DOM SELECTORS
const container = document.querySelector('#board-container');

const colors = ['#9b5de5', '#f15bb5', '#fee440', '#00bbf9', '#00f5d4'];
const squares = 500;

// EVENT LISTENERS

// FUNCTIONS

for(let i = 0; i < squares; i++) {
    const square = document.createElement('DIV');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}


function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// DOM SELECTORS
const boxesContainer = document.querySelector('#boxes');
const btn = document.querySelector('#btn');

// EVENT LISTENER
btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));

// FUNCTIONS
function createBoxes() {
    for(let i = 0; i < 4; i++) {
        for(let b = 0; b < 4; b++) {
            const box = document.createElement('DIV');
            box.classList.add('box');
            box.style.backgroundPosition = `${-b * 125}px ${-i * 125}px`; // X VALUE - Y VALUE
            boxesContainer.appendChild(box);
        }
    }
}
createBoxes();

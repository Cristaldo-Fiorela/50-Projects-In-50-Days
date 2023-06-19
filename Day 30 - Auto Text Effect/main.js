// DOM SELECTOR
const textEl = document.querySelector('#text');
const speedEl = document.querySelector('#speed');

// OTHER VARIABLE
const text = 'We Love Programming!';
let index = 1; 
let speed = 300 / speedEl.value;

// EVENT LISTENER
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)

// FUNCTION
writeText();

function writeText() {
    textEl.textContent = text.slice(0, index);

    index++

    if(index > text.length) index = 1;

    setTimeout(writeText, speed)
}
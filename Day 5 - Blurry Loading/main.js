// DOM Selectors
const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');

// Variables
let load = 0;
let interval = setInterval(blurring, 30) // 30 milliseconds
// Functions
function blurring() {
    load++

    if(load > 99) {
        clearInterval(interval);
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
/*
in this function the parameters entered represent:
- number: the base number
- inMin: minimum scale number
- inMax: maximum scale number
- outMin: in this case is the min parameter that has the CCS property we want to use, in opacity is 1 in blur is 30
- outMax: in this case is the max parameter that has the CCS property we want to use, in opacity is 0 in blur is 0
*/

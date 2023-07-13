// DOM SELECTOR
const imgs = document.querySelector('#imgs');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

const image = document.querySelectorAll('#imgs img');
let index = 0;
let interval = setInterval(run, 2000);

// EVENT LISTENER
rightBtn.addEventListener('click', () => {
    index++;
    changeImage();
    resetInterval();
});

leftBtn.addEventListener('click', () => {
    index--;
    changeImage();
    resetInterval();
});

//FUNCTIONS
function run() {
    index++;
    changeImage();
}

function changeImage() {
    if( index > image.length - 1) {
        index = 0;
    } else if (index < 0) {
        index = image.length - 1;
    }

    imgs.style.transform = `translateX(${-index * 500}px)`
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}
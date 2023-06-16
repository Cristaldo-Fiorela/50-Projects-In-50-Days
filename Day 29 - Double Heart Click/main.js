// DOM SELECTOR
const loveMe =  document.querySelector('.loveMe');
const times =  document.querySelector('#times');

let timesClicked = 0;

// EVENT LISTENER
loveMe.addEventListener('dblclick', (e) => createHeart(e));

// FUNCTION

const createHeart = (e) => {
    const heart = document.createElement('I');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    // making the mouse position relative to de image size
    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.appendChild(heart);

    times.textContent = ++timesClicked;

    setTimeout(() => heart.remove(), 2000);
}
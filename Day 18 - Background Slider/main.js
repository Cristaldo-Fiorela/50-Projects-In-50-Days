// DOM Selectors
const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

// Variables 
let activeSlide = 0;

// Event Listener
rightBtn.addEventListener('click', () => {
    activeSlide++;

    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
})

leftBtn.addEventListener('click', () => {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }

    setBgToBody();
    setActiveSlide();
})

// Functions
setBgToBody();

function setBgToBody() {
    // Obtains de BG-URL from each slide
    slides.forEach((slide, index) => {
        // We use getComputedStyle because que are working with style written in the file CCS
        const style = getComputedStyle(slide);
        // Access the bg image property.
        const backgroundImage = style.backgroundImage;
        // we remove any symbol foreign to our url, otherwise the entire property would come = url('').
        const imageUrl = backgroundImage.match(/url\(\s*(['"])?(.*?)\1\s*\)/)[2];

        // Assigns the URL of the background image to the document body
        if(index === activeSlide) {
            body.style.backgroundImage = `url(${imageUrl})`;
        }
    });
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'));

    slides[activeSlide].classList.add('active');
}
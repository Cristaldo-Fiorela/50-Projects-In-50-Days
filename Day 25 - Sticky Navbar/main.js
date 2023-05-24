// DOM Selectors
const nav = document.querySelector('.nav');

// Event Listener
window.addEventListener('scroll', fixNav);

// Functions
function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}
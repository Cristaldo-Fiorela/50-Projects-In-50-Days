// DOM SELECTORS
const numbers = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();
// EVENT LISTENERS

// FUNCTIONS
function runAnimation() {
    numbers.forEach((number, index) => {
        const nextToLast =  number.length - 1;

        number.addEventListener('animationend', (e) => {
            if(e.animationName === 'goIn' && index !== nextToLast) {
                number.classList.remove('in');
                number.classList.add('out');
            } else if(e.animationName === 'goOut' && number.nextElementSibling) {
                number.nextElementSibling.classList.add('in');
            } else {
                counter.classList.add('hide');
                finalMessage.classList.add('show');
            }
        });
    });
}
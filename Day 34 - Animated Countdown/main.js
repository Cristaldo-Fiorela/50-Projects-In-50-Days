// DOM SELECTORS
const numbers = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();
// EVENT LISTENERS
replay.addEventListener('click', () => {
    resetDOM();
    runAnimation();
});

// FUNCTIONS
function resetDOM() {
    counter.classList.remove('hide');
    finalMessage.classList.remove('show');

    numbers.forEach((number) => {
        number.classList.value = '';
    });

    numbers[0].classList.add('in');
}

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
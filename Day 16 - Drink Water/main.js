// DOM selectors
const smallCups = document.querySelectorAll('.cup-small');
const liters = document.querySelector('#liters');
const percentage = document.querySelector('#percentage');
const remained = document.querySelector('#remained');


smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index));
})

function highlightCups(index) {
    // checking if is already full
    if(smallCups[index].classList.contains('full')  && !smallCups[index].nextElementSibling.classList.contains('full')) {
        index--
    }

    // filling the cups
    smallCups.forEach((cup, index2) => {
        if(index2 <= index) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    }) 
}
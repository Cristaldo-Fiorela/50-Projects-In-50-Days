// DOM
const progress = document.querySelector('#progress');
const previewBtn = document.querySelector('#preview');
const nextBtn = document.querySelector('#next');
const circles = document.querySelectorAll('.circle')

// Variables 
let currentActive = 1;

// Event Listeners
nextBtn.addEventListener('click', nextStep);
previewBtn.addEventListener('click', prevStep);

// Function
function nextStep() {
    currentActive++;
    // we limit the currentActive to the number of circles
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    activeProgress();
    disableBtn();
}

function prevStep() {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    activeProgress();
    disableBtn();
}

function activeProgress() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
    /*
    Several things happen here:
    1. We divide the active length by the length of our "array" of circles.
    2. We multiply by 100 to round the results to percentages.
    3. Concatenate to 100 the % for the correct semantic use of the width property.
    4. We subtract -1 to active and circle to match our numbers with our bar since the results obtained before were very big numbers. Example: from 50% to 33%.
    */
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
}

function disableBtn() {
    if(currentActive === 1) {
        previewBtn.disabled = true;
    } else if (currentActive === circles.length) {
        nextBtn.disabled = true;
    } else {
        previewBtn.disabled = false;
        nextBtn.disabled = false;
    }
}
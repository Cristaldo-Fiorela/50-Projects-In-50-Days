// DOM SELECTORS
const toggles = document.querySelectorAll('.toggle');
const goodCheckbox = document.querySelector('#good');
const cheapCheckbox = document.querySelector('#cheap');
const fastCheckbox = document.querySelector('#fast');


// EVENT LISTENERS
toggles.forEach( toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)));

// FUNCTIONS
function doTheTrick(checkboxClicked) {
    if(goodCheckbox.checked && cheapCheckbox.checked && fastCheckbox.checked) {
        if( goodCheckbox === checkboxClicked) {
            fastCheckbox.checked = false;
        }
        if( cheapCheckbox === checkboxClicked) {
            goodCheckbox.checked = false;
        }
        if( fastCheckbox === checkboxClicked) {
            cheapCheckbox.checked = false;
        }
    }
}
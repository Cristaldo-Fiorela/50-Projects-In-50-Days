// DOM Selectors
const toggleBtn = document.querySelectorAll('.faq-toggle');

// Event Listeners
toggleBtn.forEach( button => button.addEventListener('click', activeBox))

// Function
function activeBox(button) {
    const clickedDiv = button.target.parentElement.parentElement;

    clickedDiv.classList.toggle('active')

    // ! My method is longer than the teacher used
    // if(clickedDiv.classList.contains('active')) {
    //     clickedDiv.classList.remove('active');
    // } else {
    //     clickedDiv.classList.add('active');
    // }
}

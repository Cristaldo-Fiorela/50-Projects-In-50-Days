// DOM SELECTOR
const buttons = document.querySelectorAll('.ripple');

// Event Listener
buttons.forEach(button => {
    button.addEventListener('click', rippleBtnEffect)
})

// Function
function rippleBtnEffect(e) {
    const button = e.target;
    const x = e.clientX;
    const y = e.clientY;

    // Gets the button position
    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;

    const xInside = x - btnLeft;
    const yInside = y - btnTop;
    console.log(xInside, yInside)

    const circle = document.createElement('SPAN');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    button.appendChild(circle);
    
    setTimeout(() => {
        circle.remove()
    }, 5000);
}
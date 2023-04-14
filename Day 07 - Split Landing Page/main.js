// DOM Selectors
const leftSide = document.querySelector('.left');
const rightSide = document.querySelector('.right');
const container = document.querySelector('.container');

// Event Listener
leftSide.addEventListener('mouseenter', mouseEvent);
leftSide.addEventListener('mouseleave', mouseEvent);
rightSide.addEventListener('mouseenter', mouseEvent);
rightSide.addEventListener('mouseleave', mouseEvent);

// Functions
function mouseEvent(e) {
    let classList = e.target.classList;
    let eventType = e.type;

    if(eventType === 'mouseenter' && classList.contains('left')) {
        container.classList.add('hover-left');
    } else {
        container.classList.remove('hover-left');
    } 
    
    if(eventType === 'mouseenter' && classList.contains('right')) {
        container.classList.add('hover-right');
    } else {
        container.classList.remove('hover-right');
    }
}

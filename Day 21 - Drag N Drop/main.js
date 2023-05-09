// * DOM Selector
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// * Event Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach(empty => {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
});

// * Functions
function dragStart(e) {
    const target = e.target;
    target.className += ' hold';

    setTimeout(() => {
        target.className = 'invisible';
    }, 0);
}

function dragEnd(e) {
    const target = e.target;
    target.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();

    const target = e.target;
    target.className += ' hovered';
}

function dragLeave(e) {
    const target = e.target;
    target.className += 'empty';
}

function dragDrop(e) {
    const target = e.target;
    target.className = 'empty';
    target.append(fill);
}
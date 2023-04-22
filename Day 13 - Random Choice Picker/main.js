// * DOM Selectors
const tagsContainer = document.querySelector('#tags');
const textarea = document.querySelector('#textarea');

textarea.focus(); // when the page is loaded it places the cursor in the textarea ready to start typing in it.

// * Event Listener
textarea.addEventListener('keyup', (e) => {
    createTags(e)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);
        randomSelect()
    }
});

// * Functions
function createTags(e) {
    const inputValue = e.target.value;
    const tags = splitAndClean(inputValue);

    tagsContainer.innerHTML = '';

    tags.forEach(tag => {
        const tagElement = document.createElement('SPAN');
        tagElement.classList.add('tag');
        tagElement.innerText = tag;
        tagsContainer.appendChild(tagElement);
    });
}

function splitAndClean(str) {
    return str.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
}

function randomSelect() {
    const times = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);

        setTimeout(() => {
            unhighlightTag(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag);
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight');
}

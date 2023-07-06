// * DOM SELECTORS
const addBtn = document.querySelector('#add');

// * EVENT LISTENERS
addBtn.addEventListener('click', () => addNewNote());

// * FUNCTIONS

function addNewNote( text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
    <div class="tools">
        <button class="edit">
            <i class="fas fa-edit"></i>
        </button>
        <button class="delete">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="main ${text ? "hidden" : ""}"></textarea>
    `

    document.body.appendChild(note);
}
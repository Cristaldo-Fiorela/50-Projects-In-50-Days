// DOM Selectores
const insert = document.querySelector('#insert');

// Event Listener
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class="key">
        <p>${e.key === ' ' ? 'Space' : e.key }</p>
        <small>event.key</small>
    </div>
    <div class="key">
        <p>${e.keyCode}</p>
        <small>event.keyCode</small>
    </div>
    <div class="key">
        <p>${e.code}</p>
        <small>event.code</small>
    </div>`
})
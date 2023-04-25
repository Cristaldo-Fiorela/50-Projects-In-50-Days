//DOM Selector
const toggle = document.querySelector('#toggle');
const nav = document.querySelector('#nav');

// Event Listener
toggle.addEventListener('click', () => nav.classList.toggle('active'));
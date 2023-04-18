// DOM Selectors

// Variables
const sounds = ['aplause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Event Listeners

// Functions
sounds.forEach(sound => {
    const btn = document.createElement('BUTTON');
    btn.classList.add('btn');

    btn.innerText = sound;

    document.querySelector('#buttons').appendChild(btn)
})
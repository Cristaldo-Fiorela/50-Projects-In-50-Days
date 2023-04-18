// DOM Selectors
const buttonsDiv = document.querySelector('#buttons');

// Variables
const sounds = ['aplause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Event Listeners
buttonsDiv.addEventListener('click', event => {
    const sound = event.target.textContent;
    if (sound) {
        stopSongs();
        document.getElementById(sound).play();
    }
});

// Functions
sounds.forEach(sound => {
    let btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = sound;
    buttonsDiv.appendChild(btn);
});

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    })
}
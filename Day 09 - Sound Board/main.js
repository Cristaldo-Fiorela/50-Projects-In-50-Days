// DOM Selectors
const buttonsDiv = document.querySelector('#buttons');

// Variables
const sounds = ['aplause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Functions
sounds.forEach(sound => {
    const btn = document.createElement('BUTTON');
    btn.classList.add('btn');

    btn.innerText = sound;

    // Event Listeners
    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    })

    buttonsDiv.appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    })
}
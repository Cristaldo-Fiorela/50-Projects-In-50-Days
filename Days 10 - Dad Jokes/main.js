// DOM Selectors
const jokeDiv = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');
console.log(jokeBtn)

// Event Listener
jokeBtn.addEventListener('click', generateJoke)

// Function
generateJoke();
function generateJoke() {
    const url = 'https://icanhazdadjoke.com/';
    console.log(url)
    const config = {
        headers: {
            "Accept": "application/json"
        }
    }

    fetch(url, config)
        .then( response => response.json())
        .then( data => {
            jokeDiv.innerHTML = data.joke;
        } )
}
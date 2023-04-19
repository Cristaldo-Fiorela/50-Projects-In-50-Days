// DOM Selectors
const jokeDiv = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');
console.log(jokeBtn)

// Event Listener
jokeBtn.addEventListener('click', generateJokeAsync)

// Function

// Async function
generateJokeAsync();
async function generateJokeAsync() {
    // URL and HTTP request configuration
    const url = 'https://icanhazdadjoke.com/';
    const config = {
        headers: {
            "Accept": "application/json"
        }
    }

    // HTTP request and response processing
    const response = await fetch(url, config);
    const data = await response.json()
    jokeDiv.innerHTML = data.joke;
}

// Without async
function generateJoke() {
    // URL and HTTP request configuration
    const url = 'https://icanhazdadjoke.com/';
    const config = {
        headers: {
            "Accept": "application/json"
        }
    }

    // HTTP request and response processing
    fetch(url, config)
        .then( response => response.json())
        .then( data => {
            jokeDiv.innerHTML = data.joke;
        } )
}
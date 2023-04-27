// Variables
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b44cf7ce13996639e438c5a4423d77f5&page=1';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=b44cf7ce13996639e438c5a4423d77f5&query="';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

// DOM Selectos
const form = document.querySelector('#form');
const search = document.querySelector('#search');
const main = document.querySelector('#main');

// Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);

        search.value = '';
    } else {
        window.location.reload();
    }
})

// Get inicial movies
getMovies(API_URL);

async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json();

    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('DIV');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                <p>${overview}</p>
            </div>
        `
        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}
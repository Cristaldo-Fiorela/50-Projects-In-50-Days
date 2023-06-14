// DOM SELECTORS
const form = document.querySelector('#form');
const search = document.querySelector('#search');
const cardContainer = document.querySelector('#card-container');

// OTHER VARIABLE
const APIURL = 'https://api.github.com/users/';

// EVENT LISTENER
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;

    if(user) {
        getUser(user);

        search.value = '';
    }
})

// FUNCTION
async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username);

        createUserCard(data);
        getRepos(username);
    } catch (error) {
        if(error.response.status === 404) {
            createErrorCard('No profile with this user name found');
        }
        console.error(error)
    }
}   

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created');

        addReposToCard(data);
    } catch (error) {
            createErrorCard('Problem fetching repos');
    }
}

function createUserCard(user) {
    const { avatar_url, name, bio,followers, following, public_repos } = user;
    const cardHTML = `
    <div class="card">
        <div>
            <img
                src="${avatar_url}"
                alt="${name}"
                class="avatar"
            />
        </div>
        <div class="user-info">
            <h2>${name}</h2>
            <p>
                ${bio}
            </p>
            <ul>
                <li>${followers}<strong>Followers</strong></li>
                <li>${following}<strong>Following</strong></li>
                <li>${public_repos}<strong>Repos</strong></li>
            </ul>
            <div id="repos"></div>
        </div>
    </div>
    `

    cardContainer.innerHTML = cardHTML;
}


function createErrorCard(message) {
    const cardHTML = `
    <div>
        <h1>${message}</h1>
    </div>
    `;

    cardContainer.innerHTML =  cardHTML;
}

function addReposToCard(repos) {
    const reposElement = document.querySelector('#repos');

    repos.slice(0, 5).forEach( repo => {
        const repoLink = document.createElement('A');
        repoLink.classList.add('repo');
        repoLink.href = repo.html_url;
        repoLink.target = '_blank';
        repoLink.innerText = repo.name;

        reposElement.appendChild(repoLink)
    });
}
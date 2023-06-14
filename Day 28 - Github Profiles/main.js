// DOM SELECTORS
const form = document.querySelector('#form');
const search = document.querySelector('#search');

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

        console.log(data);
    } catch (error) {
        console.error(error);
    }

}   
// DOM SELECTORS
const result = document.getElementById('result');
const filter = document.getElementById('filter');

const listItem = []

// EVENT LISTENER

// FUNCTION
getData();

async function getData() {
    const response = await fetch('https://randomuser.me/api?results=20');
    const { results } = await response.json();
    console.log(results);
    // Clear results
    results.innerHTML = '';

    results.forEach(user => {
        const li = document.createElement('LI');

        listItem.push(li);
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;

        result.appendChild(li);
    });
}
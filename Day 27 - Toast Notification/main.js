// DOM Selectors
const button = document.querySelector('#btn');
const toastsContainer = document.querySelector('#toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info', 'success', 'error'];

// Event Listeners
button.addEventListener('click', () => createNotification());

// Functions
function createNotification(message = null, type= null) {
    // Create the notification div
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type ? type : getRandomType());

    // injecting a random message
    notif.textContent = message ? message : getRandomMessage();
    toastsContainer.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}
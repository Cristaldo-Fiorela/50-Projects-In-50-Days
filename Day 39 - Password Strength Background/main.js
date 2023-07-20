// DOM SELECTOR
const password = document.querySelector('#password');
console.log(password)
const background =  document.querySelector('#background');

// EVENT LISTENER
password.addEventListener('input', (e) => {
    const input = e.target.value;
    console.log(input)
    const length = input.length;
    const blurValue = 20 - length * 2;
    background.style.filter = `blur(${blurValue}px)`;
})
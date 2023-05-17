// DOM selectors
const header = document.querySelector('#header');
const title = document.querySelector('#title');
const excerpt = document.querySelector('#excerpt');
const profile_img = document.querySelector('#profile_img');
const author_name = document.querySelector('#name');
const date = document.querySelector('#date');
const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_text = document.querySelectorAll('.animated-bg-text');

// Functions

setTimeout(getData, 2000);

function getData() {
    header.innerHTML = '<img src="https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2029.jpg?auto=webp&quality=75&width=1024"alt="laptop"/>';
    title.textContent = 'This is a Title';
    excerpt.textContent ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/9.jpg" alt="author profile picture">';
    author_name.textContent = 'Donna Cristaldi';
    date.textContent = '17 Mayo, 2023';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg'));
}
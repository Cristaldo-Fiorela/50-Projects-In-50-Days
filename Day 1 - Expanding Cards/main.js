//Variables
const panels = document.querySelectorAll('.panel');

//AddeventListeners
panels.forEach(panel => { 
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active');
    })
})

//Functions
function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
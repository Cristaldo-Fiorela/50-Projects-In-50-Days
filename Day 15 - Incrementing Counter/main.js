// DOM Selector
const counters =  document.querySelectorAll('.counter');

counters.forEach( counter => {
    counter.textContent = '0';

    const updateCounter = () => {
        const target = Number(counter.getAttribute('data-target'));
        const counterStart = Number(counter.textContent)

        let incremenet = target / 200;

        if(counterStart < target) {
            counter.innerText = `${Math.ceil(counterStart + incremenet)}`

            setTimeout(() => {
                updateCounter()
            }, 1);
        } else {
            counter.innerText = target;
        }
    }
    updateCounter()
})
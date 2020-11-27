const body = document.querySelector('body');
const color1 = document.querySelector('[name="color1"]');
const color2 = document.querySelector('[name="color2"]');
const h3 = document.querySelector('h3');
const random = document.querySelector('button');

addListener(color1);
addListener(color2);

random.addEventListener('click', () => {
    const random1 = randomHex();
    const random2 = randomHex();
    body.style.background = `linear-gradient(to right, #${random1}, #${random2})`;
    changeH3(random1, random2, true);
    color1.value =`#${random1}`
    color2.value =`#${random2}`
})

function addListener (input) {
    input.addEventListener('input', () => {
        body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
        changeH3(color1.value, color2.value, false);
    })
}

function changeH3 (col1, col2, bool) {
    (!bool) ? h3.innerHTML = `${col1.toUpperCase()} to ${col2.toUpperCase()}` : h3.innerHTML = `#${col1} to #${col2}`;
}

function randomHex () {
    const hex = '0123456789ABCDEF';
    let output = '';
    for (let i = 0; i < 6; ++i) {
        output += hex.charAt(Math.floor(Math.random() * hex.length));
    }
    return output;
}
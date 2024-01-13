const slider = document.querySelector('.image-slider');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const heading = document.querySelector('.caption h1');

const assets = ["url(assets/sunny.jpg)", "url(assets/snowy.jpg)", "url(assets/rainy.jpg)"];
const headings = ["SUNNY", ", SNOWY", "RAINY"];

let id = 0;

function slide(id) {
    slider.style.backgroundImage = assets[id];
    slider.classList.add('image-fade');
    setTimeout(() => {
        slider.classList.remove('image-fade');
    }, 550);
    heading.innerText = headings[id];
}

arrLeft.addEventListener('click', () => {
    id--;
    if (id < 0) {
        id = assets.length - 1;
    }
    slide(id);
});

arrRight.addEventListener('click', () => {
    id++;
    if (id > assets.length - 1) {
        id = 0;
    }
    slide(id);
});
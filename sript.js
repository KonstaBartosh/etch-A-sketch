const template = document.querySelector('.template').content;
const grid = document.querySelector('.grid');
let gridNumber = 16 * 16;

for (let i = 0; i < gridNumber; i++) {
    const cell = template.querySelector('.cell').cloneNode(true);
    grid.prepend(cell);
}

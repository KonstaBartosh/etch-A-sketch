const template = document.querySelector('.template').content; // finding template in html
const gridContainer = document.querySelector('.grid'); // finding empty div container in html
let gridSize = 16;

function generateCells () {
    for (let i = 0; i < gridSize ** 2; i++) {
        const cell = template.querySelector('.cell').cloneNode(true); // deep cloning element
        gridContainer.prepend(cell);
        
        cell.addEventListener('mouseover', function (evt) {
            if (evt.buttons === 1) {
                console.log(evt.buttons)
                cell.classList.add('cell_active')
            }
        });
    }
}

generateCells();

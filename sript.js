const template = document.querySelector('.template').content; // finding template in html
const gridContainer = document.querySelector('.grid'); // finding empty div container in html
let gridSize = 10;

function generateCells () {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = template.querySelector('.cell').cloneNode(true); // deep cloning element
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        gridContainer.prepend(cell);
        
        cell.addEventListener('mouseover', function (evt) {
            if (evt.buttons === 1) { // проверяем, что зажата левая кнопка мыши
                cell.classList.add('cell_active')
            }
        });
    }
}
generateCells();
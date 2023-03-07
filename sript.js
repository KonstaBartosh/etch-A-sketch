const template = document.querySelector('.template').content; // finding template in html
const gridContainer = document.querySelector('.grid'); // finding empty div container in html
const form = document.querySelector('.form'); 
const input = form.querySelector('.input');
const resetButton = form.querySelector('.reset-button');

let gridSize = 16;

//renedering canvas
function renderCanvas () {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = template.querySelector('.cell').cloneNode(true); // deep cloning element
        //making grid layout
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        //pushing it to emty conteiner
        gridContainer.prepend(cell);
        
        cell.addEventListener('mouseover', function (evt) { // drawing
            if (evt.buttons === 1) { // check if left button clicked!
                cell.classList.add('cell_active')
            }
        });
        resetButton.addEventListener('click', function() { //reset function
            cell.classList.remove('cell_active');
        });
    }
}
renderCanvas();

// changing size of the grid
function gridSizeHandler() {
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        gridContainer.innerHTML = '';
        gridSize = input.value;
        renderCanvas();
    });
}

gridSizeHandler();
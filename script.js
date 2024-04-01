const container = document.querySelector('#container');
function makeGrid(squares) {
    container.style.display = 'flex'
    container.innerHTML = '';
    const squareSize = container.clientWidth / squares;

    for (let i = 0; i < squares ** 2; i++) {
        const square = document.createElement('div');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.className = 'square';
        square.style.outline = 'solid gray 1px';
        square.addEventListener('mouseenter', addColor);
        
        container.appendChild(square);
    }
};
makeGrid(1);

function addColor(event) {
    event.target.style.background = 'lightblue';
    // event represents the event that occured (mouseenter)
    // event.target refers to element that triggered the event (square element)
 };

 const gridButton = document.querySelector("#sizeBtn");
 gridButton.addEventListener('click', getGridSize);

function getGridSize() {
     let gridSize = prompt("choose a grid size from 1-100");
     makeGrid(gridSize);
};
    
const resetButton = document.querySelector("#resetBtn");
resetButton.addEventListener('click', () => {
    const squares = container.querySelectorAll("div");
    squares.forEach (square => {
        square.style.backgroundColor = '';
    });
});
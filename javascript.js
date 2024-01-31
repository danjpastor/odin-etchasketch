let gridSize = 50;
let gridContainer = document.querySelector("#grid-container");

function resetGrid() {
    while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

function randomcolor() {
    return Math.floor(Math.random() * 255);
}

function createGrid() {
    for (let x = 0; x < gridSize; x++) {
        let row = document.createElement('div');
        row.setAttribute("class", "row")

        for (let x = 0; x < gridSize; x++) {
            let box = document.createElement('div');
            box.setAttribute("class", "box");

            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = 'rgba('+randomcolor()+','+randomcolor()+','+randomcolor()+'\)';
            })

            box.style.cssText = `width: ${650/gridSize}px; height: ${650/gridSize}px;`
            row.appendChild(box)
        }
        gridContainer.appendChild(row)
    }
}

let button = document.querySelector('button');
button.addEventListener('click', () => {

    gridSize = prompt("Please Enter a Grid Size Between 1 and 100")
    resetGrid()
    createGrid()
})


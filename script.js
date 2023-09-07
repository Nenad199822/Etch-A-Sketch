document.addEventListener('DOMContentLoaded', function () {
    createBoard(16);
});
let sizeSelector = document.getElementById('popup')
sizeSelector.addEventListener('click', function () {
    let newSize = parseInt(prompt("Please enter a number from 1 to 100"))
    while (!newSize) {
        newSize = parseInt(prompt('Please enter valid number!'));
    }
    if (newSize > 100) {
        newSize = parseInt(prompt("Enter number below 100"));
    }
    else {
        createBoard(newSize);
    }

});

function createBoard(size) {
    let board = document.querySelector('.board');
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;

    let numDivs = size * size;
    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        board.appendChild(div)
        div.addEventListener('mouseover', function () {
            div.style.backgroundColor = "black";
        })
    }
}
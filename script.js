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
function clearBoard() {
    let divs = document.getElementsByClassName('active')
    for (i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = 'white'
    }
}

function createBoard(size) {
    let board = document.querySelector('.board');
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;

    let numDivs = size * size;
    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        clearBoard();
        board.appendChild(div)
        div.addEventListener('mouseover', function () {
            div.classList.add('active');
            div.style.backgroundColor = "black";
        })
    }
}
let reset = document.getElementById('reset');
reset.addEventListener('click', function () {
    clearBoard();

})
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
        currentColor = 'red';
    }
});
function clearBoard() {
    let divs = document.getElementsByClassName('active')
    for (i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = 'white'
    }
}
let currentColor = 'blue'

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
            if (currentColor === 'random') {
                div.style.backgroundColor = getRandomColor();
            } else if (currentColor === 'black') {
                div.style.backgroundColor = 'black'
            } else {
                div.style.backgroundColor = 'red'
            }
        })

    }
}


let reset = document.getElementById('reset');
reset.addEventListener('click', function () {
    clearBoard();

})
let black = document.getElementById('black')
black.addEventListener('click', function () {
    clearBoard()
    currentColor = 'black';
});
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let random = document.getElementById('random')
random.addEventListener('click', function () {
    clearBoard()
    currentColor = 'random'

});


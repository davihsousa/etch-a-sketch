const board = document.querySelector('.board');
const description = document.querySelector('.description');

description.addEventListener('click', newBoard);

createGrid(4);

function createGrid(size) {
  resetBoard();
  let i;
  for (i = 0; i < size ** 2; i++) {
    const element = document.createElement('p');
    element.className = 'gridElement';
    // element.textContent = 'test';
    board.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`);
    board.appendChild(element);
  }
  paintBoard();
}

function paintBoard() {
  const elements = Array.from(document.querySelectorAll('.gridElement'));
  elements.forEach((element) =>
    element.addEventListener(
      'mouseover',
      (e) => (e.target.style.backgroundColor = '#6f6cde')
    )
  );
}

function resetBoard() {
  while (board.firstElementChild) {
    board.removeChild(board.lastChild);
  }
}

function newBoard() {
  const size = prompt('Enter new board size, please:');
  createGrid(size);
}

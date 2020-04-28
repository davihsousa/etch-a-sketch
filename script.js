const board = document.querySelector('.board');

function createGrid(size) {
  let i;
  for (i = 0; i < size; i++) {
    const element = document.createElement('p');
    element.className = 'gridElement';
    element.textContent = 'test';
    board.appendChild(element);
  }
}

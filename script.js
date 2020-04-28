const board = document.querySelector('.board');
const description = document.querySelector('.description');

description.addEventListener('click', newBoard);

createGrid(25);

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
  paintBoardRgb();
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

function paintBoardRgb() {
  const elements = Array.from(document.querySelectorAll('.gridElement'));
  elements.forEach((element) =>
    element.addEventListener('mouseover', () => {
      element.style.backgroundColor = randomRgb();
      element.className = newClass(element);
    })
  );
}

function newClass(element) {
  const actualClass = element.className;
  let className;

  if (actualClass.slice(-1) === 't') {
    timesHovered = 0;
  } else {
    timesHovered = actualClass.slice(-2);
  }

  if (timesHovered === 0) {
    className = 'gridElement01';
  } else if (timesHovered < 10) {
    className = `gridElement0${++timesHovered}`;
  } else {
    element.style.backgroundColor = 'black';
  }
  return className;
}

function randomRgb() {
  const r = Math.floor(Math.random() * 256) + 1;
  const g = Math.floor(Math.random() * 256) + 1;
  const b = Math.floor(Math.random() * 256) + 1;
  return `rgb(${r},${g},${b})`;
}

function resetBoard() {
  while (board.firstElementChild) {
    board.removeChild(board.lastChild);
  }
}

function newBoard() {
  const size = prompt('How many squares per size?');
  createGrid(size);
}

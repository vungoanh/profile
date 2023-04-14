const container = document.querySelector('.container');
const button = document.querySelector('#menuButton');
const menu = document.querySelector('.menu');

let isClickedInside = false;

button.addEventListener('mousedown', () => {
  isClickedInside = true;
});

button.addEventListener('touchstart', () => {
  isClickedInside = true;
});

menu.addEventListener('mousedown', () => {
  isClickedInside = true;
});

menu.addEventListener('touchstart', () => {
  isClickedInside = true;
});

menu.addEventListener('focusout', () => {
  if (!isClickedInside) {
    menu.classList.remove('active');
  }
});

container.addEventListener('mousedown', () => {
  isClickedInside = true;
});

container.addEventListener('touchstart', () => {
  isClickedInside = true;
});

container.addEventListener('focusout', () => {
  if (!isClickedInside) {
    menu.classList.remove('active');
  }
});

button.addEventListener('click', () => {
  menu.classList.add('active');
  menu.focus();
});

menu.addEventListener('blur', () => {
  menu.classList.remove('active');
});

menu.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    menu.blur();
  }
});

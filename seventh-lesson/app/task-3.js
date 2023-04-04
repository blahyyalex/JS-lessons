// Отримуємо необхідні елементи
const bodyElement = document.body;
const firstButton = document.querySelector('#button1');
const secondButton = document.querySelector('#button2');
const thirdButton = document.querySelector('#button3');
const linkElement = document.querySelector('a');

// Додаємо обробник подій для 1-ї кнопки
firstButton.addEventListener('click', () => {
  bodyElement.style.backgroundColor = 'blue';
});

// Додаємо обробник подій для 2-ї кнопки
secondButton.addEventListener('dblclick', () => {
  bodyElement.style.backgroundColor = 'pink';
});

// Додаємо обробник подій для 3-ї кнопки
thirdButton.addEventListener('mousedown', () => {
  bodyElement.style.backgroundColor = 'brown';
});

thirdButton.addEventListener('mouseup', () => {
  bodyElement.style.backgroundColor = 'white';
});

// Додаємо обробники подій для лінки
linkElement.addEventListener('mouseover', () => {
  bodyElement.style.backgroundColor = 'yellow';
});

linkElement.addEventListener('mouseout', () => {
  bodyElement.style.backgroundColor = 'white';
});
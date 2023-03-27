// Змінюємо колір тексту заголовка
const header = document.querySelector('h1');
header.style.color = 'blue';

// Змінюємо фоновий колір елемента div з id="myDiv"
const myDiv = document.getElementById('myDiv');
myDiv.style.backgroundColor = 'lightgrey';

// Змінюємо стиль тексту елементів списку з id="myList"
const myListItems = document.querySelectorAll('#myList li');
myListItems.forEach(item => {
  item.style.display = 'inline-block';
  item.style.margin = '0 10px';
});

// Робимо невидимим елемент span
const span = document.querySelector('span');
span.style.display = 'none';
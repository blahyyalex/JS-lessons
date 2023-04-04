// отримуємо елемент кнопки та повідомлення
const button = document.getElementById('myButton');
const message = document.getElementById('message');

// додаємо обробник події click для кнопки
button.addEventListener('click', () => {
  message.innerText = 'I was pressed!';
});

// додаємо обробник події mouseover для кнопки
button.addEventListener('mouseover', () => {
  message.innerText = 'Mouse on me!';
});

// додаємо обробник події mouseout для кнопки
button.addEventListener('mouseout', () => {
  message.innerText = 'Mouse is not on me!';
});
// знаходимо всі <h2> елементи з класом "head"
const headers = document.querySelectorAll('h2.head');

// для кожного <h2> елемента з класом "head" змінюємо фон на зелений колір
headers.forEach((header) => {
  header.style.backgroundColor = 'green';

  // знаходимо всі <span> елементи з класом "inner" в межах поточного <h2> елемента
  const innerElems = header.querySelectorAll('span.inner');

  // для кожного <span> елемента з класом "inner" встановлюємо розмір шрифту 35px
  innerElems.forEach((innerElem) => {
    innerElem.style.fontSize = '35px';
  });
});

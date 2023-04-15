// Знаходимо всі теги <h3>
let headers = document.getElementsByTagName("h3");

// Проходимо по всіх тегах <h3>
for (let i = 0; i < headers.length; i++) {
  let header = headers[i];

  // Знаходимо наступний елемент після <h3>
  let nextElement = header.nextElementSibling;

  // Якщо наступний елемент - <div>, переміщуємо його перед <h3>
  if (nextElement && nextElement.tagName === "DIV") {
    header.parentNode.insertBefore(nextElement, header);
  }
}

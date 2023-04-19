const http = require('http');
const fs = require('fs');

// Шлях до файлу, у який буде записуватися інформація
const filePath = './test.txt';

// Функція для запису інформації в файл
function writeToTextFile(text) {
  fs.writeFile(filePath, text, (err) => {
    if (err) throw err;
    console.log(`Дані успішно записані у файл ${filePath}`);
  });
}

// Створення серверу
http.createServer((req, res) => {
  if (req.url === '/submit') {
    let body = '';

    // Обробка даних, введених користувачем
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    // Запис інформації у файл
    req.on('end', () => {
      writeToTextFile(body);
      res.end('Дані успішно записані у файл!');
    });
  } else if (req.url === '/read') {
    // Зчитування даних з файлу
    fs.readFile(filePath, (err, data) => {
      if (err) throw err;
      res.end(data.toString());
    });
  } else {
    // Повідомлення, яке виводиться, якщо запит не на /submit або /read
    res.end('Ласкаво просимо! Введіть /submit для запису даних або /read для їх зчитування.');
  }
}).listen(3000, () => {
  console.log('Сервер запущено на порту 3000');
});

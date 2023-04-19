const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  // встановлюємо заголовок відповіді
  res.writeHead(200, {'Content-Type': 'text/html'});

  // отримуємо інформацію про ОС
  const osInfo = `
    <h3>Операційна система:</h3>
    <p>Ім'я: ${os.hostname()}</p>
    <p>Тип: ${os.type()}</p>
    <p>Час роботи (хв): ${Math.floor(os.uptime() / 60)}</p>
  `;

  // отримуємо інформацію про робочу директорію та файл сервера
  const pathInfo = `
    <h3>Інформація про директорію та файл сервера:</h3>
    <p>Робоча директорія: ${process.cwd()}</p>
    <p>Ім'я файлу сервера: ${path.basename(__filename)}</p>
  `;

  // відправляємо відповідь клієнту
  res.end(`<html><body>${osInfo}${pathInfo}</body></html>`);
});

// запускаємо сервер на порту 5000
server.listen(5000, () => {
  console.log('Server is running on port 5000');
});

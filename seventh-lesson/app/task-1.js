// Створити нове вікно розміром 300х300 пікселів
let newWindow = window.open("", "", "width=300,height=300");

// Затримка в 2 секунди
setTimeout(() => {
  // Змінити розміри вікна на 500х500 пікселів
  newWindow.resizeTo(500, 500);
}, 2000);

// Затримка в 4 секунди
setTimeout(() => {
  // Перемістити вікно в точку з координатами (200, 200)
  newWindow.moveTo(200, 200);
}, 4000);

// Затримка в 6 секунди
setTimeout(() => {
  // Закрити вікно
  newWindow.close();
}, 6000);

// знаходимо всі посилання на сторінці
const links = document.querySelectorAll('a');

// для кожного посилання перевіряємо, чи має воно протокол HTTPS
links.forEach((link) => {
  if (link.href.startsWith('https://')) {
    // якщо посилання має протокол HTTPS, додаємо до нього атрибут target="_blank"
    link.setAttribute('target', '_blank');
  }
});

const list = document.getElementById("list"); // отримуємо список за id

const firstItem = list.firstElementChild.textContent; // отримуємо текст першого елемента
const lastItem = list.lastElementChild.textContent; // отримуємо текст останнього елемента
const secondItem = list.children[1].textContent; // отримуємо текст другого елемента
const fourthItem = list.children[3].textContent; // отримуємо текст четвертого елемента
const thirdItem = list.children[2].textContent; // отримуємо текст третього елемента

const result = `${firstItem}, ${lastItem}, ${secondItem}, ${fourthItem}, ${thirdItem}`; // формуємо результуючий рядок
console.log(result); // виводимо результуючий рядок в консоль

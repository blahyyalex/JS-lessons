//////////////// 2 task
/*Напишіть скрипт в зовнішньому файлі, який виводить в консоль ваше прізвище.
Підключіть створений файл до HTML-документу.*/ 

console.log('Blahyy');

//////////////// 3 task
/*a) оголосіть дві змінні;
  b) запишіть у змінні будь-які значення;
  c) виведіть на екран значення змінних;
  d) скопіюйте значення однієї змінної в іншу;
  e) виведіть на екран значення змінних. */

let apple = "red";
let pineApple = "yellow";

console.log(apple);
console.log(pineApple);

apple = pineApple;

console.log(apple);
console.log(pineApple);

////////////////// task 4
/*Створіть об’єкт з 5-ма наступними властивостями:
 “String”, “Number”, “Boolean”, “Undefined”, “Null”. 
 Значення кожної властивості повинно відповідати відповідному примітивному типу даних. */

let typesOfVariables = {
    ownFirstLastName : "Blahyy Oleksandr",
    ownAge :30,
    ownBoolean : true,
    ownUndefined : undefined,
    ounNull : null
};
console.log(typesOfVariables);

//////////////////// task5
/*Використовуючи функцію confirm() задайте користувачу питання 
про досягнення ним повнолітнього віку. 
Результат запишіть в змінну isAdult і виведіть в консоль. */

let isAdult = +prompt("How old are you?", "18");
console.log(isAdult);

///////////////////task 6
/*В зовнішньому файлі напишіть скрипт , в якому оголосіть змінні, для збереження таких даних:
        - ваше ім’я
        - ваше прізвище
        - навчальна група
        - ваш рік народження.
Присвойте змінним відповідні значення. 
Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
Визначте тип кожної змінної.
Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль. */

let myName = "Oleksandr";
let mySurname = "Blahyy";
let studyGroup = "JS Fundamentals";
let myBirthDayYear = 1992; 
let isMarried = false;

console.log(typeof myBirthDayYear); /////// Number
console.log(typeof isMarried);  /////////// Boolean
console.log(typeof myName);     /////////// String
console.log(typeof mySurname);  ////////// String
console.log(typeof studyGroup); ///////// String


let nullVariables = null;
let undefinedVariables;

console.log(typeof nullVariables);  ///////////object
console.log(typeof undefinedVariables); ////// undefined

/////////////////////// task 7
/*За допомогою функції prompt() напишіть скрипт ,
 який послідовно запитує в користувача логін,
  імейл та пароль, і виводить на екран повідомлення
   із введеними даними. Наприклад “Dear User,
    your email is usermale@gmail.com, your password is qwerty”. */
let yoursLogin = prompt("Please write yours Login", "");
let yoursPass = prompt("Please write yours password", "");
let yoursEmail = prompt("Please write yours email", "");

document.write(`Dear ${yoursLogin}, \n\t your email is ${yoursEmail}, \n\t your password is ${yoursPass
}`);

///////////////////// taks 8
/*Напишіть скрипт, який вираховує кількість секунд в годині,
 в добі, в місяці, записує результати в відповідні змінні,
  і виводить їх значення на екран. */
let secondsPerHour = 60 * 60;
let secondsPerDay = 24 * secondsPerHour;
let secondsPerMonth = 30 * secondsPerDay;

console.log(`There is such seconds in the hour: ${secondsPerHour}`); 
console.log(`There is such seconds in the day: ${secondsPerDay}`);
console.log(`There is such seconds in the month: ${secondsPerMonth}`);
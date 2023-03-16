///////////////// Task 1
/*Дано три цілих числа: a, b, c. Перевірте істинність висловлювання: a < b < c */

let a, b, c;

a = 3;
b = 5;
c = 7;

if(a < b && b < c){
    console.log(true);
}
else {
    console.log(false);
}

////////////////// Task 2

let x = 1;
let y = 2;

let res1 = x.toString().concat(y.toString());// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + y.toString();// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = 'hello' * (x + y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

////////////////// Task 3

let isAdult = +prompt("Are you 18 years old?", "18");
 if (isAdult >= 18){                   //////// Логічний оператор
    console.log("You are welcome!");
 }
 else{
    console.log("Sorry, you are so young...");
 }

isAdult >= 18 ? console.log("You are welcome!") : 
console.log("Sorry, you are so young...");  ///// Тернарний оператор

//////////////////////// Task 4

let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];

// Створення об'єкту з кількістю входжень кожного числа
let count = {};
for (let i = 0; i < arr.length; i++) {
  if (count[arr[i]]) {
    count[arr[i]]++;
  } else {
    count[arr[i]] = 1;
  }
}

// Знаходження числа з максимальною кількістю входжень
let maxCount = 0;
let data;
for (let key in count) {
  if (count[key] > maxCount) {
    maxCount = count[key];
    data = key;
  }
}

// Видалення всіх входжень цього числа з масиву
arr = arr.filter(item => item !== +data);

// Додавання цього числа в новий масив
let newArr = [+data];

console.log(newArr); // [5]
console.log(arr); // [4, 2, 1, 6, 3, 2]

/////////////////////// Task 5

const side1 = parseFloat(prompt('Enter the first side of the triangle'));
const side2 = parseFloat(prompt('Enter the second side of the triangle'));
const side3 = parseFloat(prompt('Enter the third side of the triangle'));

if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 <= 0 || side2 <= 0 || side3 <= 0) {
  console.log('Incorrect data');
} else {
  const perimeter = side1 + side2 + side3;
  const semiPerimeter = perimeter / 2;
  const area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
  console.log(`Triangle area: ${area.toFixed(3)}`);

  const hypotenuse = Math.max(side1, side2, side3);
  const cathetus1 = Math.min(side1, side2, side3);
  const cathetus2 = perimeter - hypotenuse - cathetus1;
  const isRightTriangle = hypotenuse ** 2 === cathetus1 ** 2 + cathetus2 ** 2;
  console.log(`Is right triangle: ${isRightTriangle}`);
}

///////////////////////////// Task 6

const date = new Date();
const hour = date.getHours();

if (hour >= 23 || hour < 5) {
  console.log("Доброї ночі");
} else if (hour >= 5 && hour < 11) {
  console.log("Доброго ранку");
} else if (hour >= 11 && hour < 17) {
  console.log("Доброго дня");
} else {
  console.log("Доброго вечора");
}
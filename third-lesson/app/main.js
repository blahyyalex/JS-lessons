///////////////// Task 1
const pupilsOfTheClassA = [5, 3, 4, 5,6,7,3];
let compact = function(pupilsOfTheClass){
  return pupilsOfTheClassA.filter(function(item, index){
    return pupilsOfTheClassA.indexOf(item) === index;
  });
}

const pupilsOfTheClassB = compact(pupilsOfTheClassA);
console.log(pupilsOfTheClassA); // [5, 3, 4, 5,6,7,3]
console.log(pupilsOfTheClassB); // [5,3,4,6,7]

/////////////////// Task 2

function createArrayFromStartToEnd(start, end) {
  const arr = [];

  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  
  return arr;
}

const arr = createArrayFromStartToEnd();
console.log(createArrayFromStartToEnd(2, 9)); // [2,3,4,5,6,7,8,9]

//////////////////// Task 3

function printNumbers(m, n) {
  for (let i = m; i <= n; i++) {
    for (let j = 1; j <= i - m + 1; j++) {
      console.log(i);
    }
  }
}

let m = 2;
let n = 6;
printNumbers(m, n);

////////////////// Task 4

function randArray(k) {
  let arr = [];
  for (let i = 0; i < k; i++) {
    arr.push(Math.floor(Math.random() * 500) + 1);
  }
  return arr;
}

let myArray = randArray(5);
console.log(myArray);


////////////////// Task 6

function calc(a, b, op) {
let message;  
  if (op === 1) {
    message = "віднімання";
    alert(message);
    return a - b;
  } else if (op === 2) {
    message = "добуток";
    return a * b;
  } else if (op === 3) {
    message = "ділення";
    return a / b;
  } else {
    message = "додавання";
    return a + b;
  }
}

let a = parseFloat(prompt("Введіть число a:"));
let b = parseFloat(prompt("Введіть число b:"));
let op = parseInt(prompt("Виберіть операцію (1 - віднімання, 2 - добуток, 3 - ділення, інше - додавання):"));

let result = calc(a, b, op);
console.log("Результат: " + result);
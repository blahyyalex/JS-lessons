//////////////// 2 task

console.log('Blahyy');

//////////////// 3 task

let apple = "red";
let pineApple = "yellow";

console.log(apple);
console.log(pineApple);

apple = pineApple;

console.log(apple);
console.log(pineApple);

////////////////// task 4

let typesOfVariables = {
    ownFirstLastName : "Blahyy Oleksandr",
    ownAge :30,
    ownBoolean : true,
    ownUndefined : undefined,
    ounNull : null
};
console.log(typesOfVariables);
//////////////////// task5

let isAdult = +prompt("How old are you?", "18");
console.log(isAdult);

///////////////////task 6
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

let yoursLogin = prompt("Please write yours Login", "");
let yoursPass = prompt("Please write yours password", "");
let yoursEmail = prompt("Please write yours email", "");

document.write(`Dear ${yoursLogin}, \n\t your email is ${yoursEmail}, \n\t your password is ${yoursPass
}`);
///////////////////// taks 8

let secondsPerHour = 60 * 60;
let secondsPerDay = 24 * secondsPerHour;
let secondsPerMonth = 30 * secondsPerDay;

console.log(`There is such seconds in the hour: ${secondsPerHour}`); 
console.log(`There is such seconds in the day: ${secondsPerDay}`);
console.log(`There is such seconds in the month: ${secondsPerMonth}`);
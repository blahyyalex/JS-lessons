function checkAge() {
    let name = prompt("Введіть своє ім'я:");
    let age = prompt("Введіть свій вік:");
    let status = prompt("Введіть свій статус (адмін, модератор, користувач):");

    try {
        if (!age) {
            throw new Error("The field is empty! Please enter your age");
        }
        age = parseInt(age);
        if (isNaN(age)) {
            throw new TypeError("Вік має бути числом");
        }
        if (age < 18 || age > 70) {
            throw new RangeError("Вік має бути в діапазоні від 18 до 70 років");
        }
        if (status !== "адмін" && status !== "модератор" && status !== "користувач") {
            throw new EvalError("Введено неправильне слово у полі статус");
        }
        alert("Ви отримали доступ до перегляду фільму!");
    } catch (error) {
        alert(error.name + ": " + error.message);
    }
}

checkAge();
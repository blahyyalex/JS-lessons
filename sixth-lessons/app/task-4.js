// отримуємо елементи форми за їх іменами
const fioInput = document.querySelector('input[name="fio"]');
const phoneInput = document.querySelector('input[name="phone"]');
const birthdayInput = document.querySelector('input[name="birthday"]');
const emailInput = document.querySelector('input[name="email"]');
const submitBtn = document.querySelector('.btn');

// встановлюємо обробник події на кнопку "submit"
submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); // запобігаємо перезавантаженню сторінки

    // отримуємо значення кожного поля форми
    const fioValue = fioInput.value;
    const phoneValue = phoneInput.value;
    const birthdayValue = birthdayInput.value;
    const emailValue = emailInput.value;

    // формуємо текст для виведення в блок з класом "out"
    const result = `ПІБ: ${fioValue}<br>
                  Номер телефону: ${phoneValue}<br>
                  Дата народження: ${birthdayValue}<br>
                  Електронна пошта: ${emailValue}`;

    // виводимо результат в блок з класом "out"
    const outBlock = document.querySelector('.out');
    outBlock.innerHTML = result;
});
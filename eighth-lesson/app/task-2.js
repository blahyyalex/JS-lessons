function checkEmail(email) {
    // Регулярний вираз для перевірки електронної адреси
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Перевірка електронної адреси з використанням регулярного виразу
    return emailRegex.test(email);
  }
  console.log(checkEmail("Qmail2@gmail.com")); // true
  console.log(checkEmail("invalid_email")); // false
    
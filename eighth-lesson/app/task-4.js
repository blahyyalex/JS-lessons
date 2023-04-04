function validateCreditCard(cardNumber) {
    // видаляємо всі дефіси з номера картки
    cardNumber = cardNumber.replace(/-/g, '');
    
    // перевіряємо, чи номер має 16 цифр
    if (cardNumber.length !== 16) {
      return false;
    }
    
    // перевіряємо, чи всі символи номеру є цифрами
    if (!/^\d+$/.test(cardNumber)) {
      return false;
    }
    
    // перевіряємо, чи номер не містить одну і ту ж цифру
    if (/^(\d)\1+$/.test(cardNumber)) {
      return false;
    }
    
    // перевіряємо, чи сума цифр номеру кратна 10
    var sum = 0;
    for (var i = 0; i < cardNumber.length; i++) {
      var digit = parseInt(cardNumber[i]);
      if (i % 2 === 0) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }
    if (sum % 10 !== 0) {
      return false;
    }
    
    // якщо всі перевірки успішні, то номер картки валідний
    return true;
  }
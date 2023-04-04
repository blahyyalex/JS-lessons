function checkEmail(email) {
    const regex = /^[a-zA-Z0-9]+([_\.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([_\.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/;
    if (regex.test(email)) {
      return "Email is correct!";
    } else {
      return "Email is not correct!";
    }
  }
  
  console.log(checkEmail('my_mail@gmail.com'));
  console.log(checkEmail('#my_mail@gmail.com'));
  console.log(checkEmail('my_ma--il@gmail.com'));
  
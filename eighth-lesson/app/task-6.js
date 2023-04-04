function checkLogin(str) {
    const loginRegex = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/;
    const matches = str.match(/[0-9]+(\.[0-9]+)?/g);
  
    if (!loginRegex.test(str)) {
      return false;
    }
  
    if (matches) {
      return matches.map(Number);
    } else {
      return true;
    }
  }
  
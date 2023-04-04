function upperCase(str) {
    if (str[0] === str[0].toUpperCase()) {
      return "String's starts with uppercase character";
    } else {
      return "String's not starts with uppercase character";
    }
  }console.log(upperCase('regexp')); // "String's not starts with uppercase character"
  console.log(upperCase('RegExp')); // "String's starts with uppercase character"
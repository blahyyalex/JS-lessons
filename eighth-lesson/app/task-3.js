let str = "Java Script";
str = str.replace(/^(\w+)\s+(\w+)$/, "$2, $1");
console.log(str); // "Script, Java"

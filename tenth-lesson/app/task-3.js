function mul() {
    let result = 1;
  
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === "number") {
        result *= arguments[i];
      }
    }
  
    return result;
  }
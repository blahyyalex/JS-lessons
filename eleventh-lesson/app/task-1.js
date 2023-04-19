function getPromise(message, delay) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(message);
      }, delay);
    });
  }
  getPromise("test promise", 2000).then(function(data) {
    console.log(data);        
});
  
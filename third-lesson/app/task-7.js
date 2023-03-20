///////////////// Task 7
function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
      
      if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
        return false;
      }
    }
    return true;
  }
  findUnique([1, 2, 3, 5, 3]);
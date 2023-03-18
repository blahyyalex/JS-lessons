///////////////// Task 1
const arr = [5, 3, 4, 5,6,7,3];
let compact = function(arr){
  return arr.filter(function(item, index){
    return arr.indexOf(item) === index;
  });
}

const arr2 = compact(arr);
console.log(arr2) ; // [5,3,4,6,7]
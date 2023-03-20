///////////////////// Task 5

let  arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
function funcName(arr) {
  let numArr = [];
  let strArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      numArr.push(arr[i]);
    } else if (Array.isArray(arr[i])) {
      let nestedArr = funcName(arr[i]);
      numArr = numArr.concat(nestedArr[0]);
      strArr = strArr.concat(nestedArr[1]);
    } else {
      strArr.push(arr[i]);
    }
  }

  return [numArr, strArr];
}
console.log(arr);
console.log(funcName(arr));
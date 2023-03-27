function sumSliceArray(arr, first, second) {
    if (!Number.isInteger(first) || !Number.isInteger(second)) {
        throw new Error("Порядкові номери мають бути цілими числами");
    }
    if (first >= arr.length || second >= arr.length) {
        throw new Error("Порядкові номери перевищують розмір масиву");
    }
    return arr[first] + arr[second];
}

const arr = [1, 2, 3, 4, 5];

try {
    const result = sumSliceArray(arr, 2, 4);
    console.log(result); // 8

    const result2 = sumSliceArray(arr, 2, 'four');
    console.log(result2);
} catch (error) {
    console.log(error.message);
}
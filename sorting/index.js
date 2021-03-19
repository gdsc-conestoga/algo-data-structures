const { bubbleSort } = require('./bubblesort');
const { mergeSort } = require('./mergesort');


let arr = [9, 8, 1, 2];
arr = bubbleSort(arr);
console.log(arr); // [1, 2, 8, 9]

arr = [5, 1, 3, 2, 4];
arr = mergeSort(arr);
console.log(arr); // [1, 2, 3, 4, 5]

function merge(arr1, arr2) {
  let i = 0; // pointer over arr1
  let j = 0; // pointer over arr2
  let result = []; // to be returned

  // over both arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // over arr1
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // over arr2
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr; // base case

  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

module.exports = { mergeSort };

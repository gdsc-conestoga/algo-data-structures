function bubbleSort(arr){
  let swapped = true;
  for(let i = arr.length; i > 0; i--){
      for(let j = 0; j < i - 1; j++){
          //console.log(arr, arr[j], arr[j + 1]);
          if(arr[j] > arr[j + 1]){
              swap(arr, j, j + 1);
          }
      }
      if(!swapped) break;
  }

  return arr;
}

function swap(arr, idx1, idx2){
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

module.exports = {
  bubbleSort
}
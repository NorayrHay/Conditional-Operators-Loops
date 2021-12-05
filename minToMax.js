'use strict'

function minToMax(arr, temp) {
    for (let i = 0; i < arr.length; i++){
      if(arr[i + 1] < arr[i]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    return arr;
  }
  console.log(minToMax([-23, -456, 0]));
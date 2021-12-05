'use strict'

function countOfNumStr(arr) {
    let count1 = 0;
    let count2 = 0;
  
    for(let i = 0; i < arr.length; i++){
      if (typeof(arr[i]) === 'number')     count1++;
      else if (typeof(arr[i]) === 'string')     count2++;
    }
    return count1 + ' - numbers and ' + count2 + ' - strings';
  }
  console.log(countOfNumStr([1, '10', 'hi', 2, 3]));
'use strict'

function findNumInArr(arr, num) {
  
    for(let i = 0; i < arr.length; i++) {
  
      let curr = arr[0];
      let diff = Math.abs (num - curr);
      for (let val = 0; val < arr.length; val++) {
        let newdiff = Math.abs (num - arr[val]);
        if (newdiff < diff) {
            diff = newdiff;
            curr = val;
        }
      }
      return curr;
    }
  }
  console.log(findNumInArr([21, -9, 15, 2116, -71, 33], 33));
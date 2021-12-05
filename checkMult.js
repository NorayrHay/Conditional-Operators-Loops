'use strict'

function checkMultiple(n, numberArr) {
    let result = [];
  
    for(let i = 0; i < numberArr.length; i++) {
      if (n % numberArr[i] === 0) {
        // result.push(numberArr[i]);
        return n + ' is multiple to ' + numberArr[i];
      }
      else if(n % numberArr[i] !== 0){
        return n + ' is not multiple to ' + numberArr;
      }
    }
    
  }
  console.log(checkMultiple(42, [3, 5, 7]));
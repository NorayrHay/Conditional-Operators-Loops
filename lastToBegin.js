'use strict'

const numArr = [367, 1002, 250, 8];
let numStr1 = "";
let numStr2 = null;
let numStr3 = null;
let res = null;

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] < 10){
  console.log(numArr[i]);
  }
  else if (numArr[i] >= 10){
    numStr1 = numArr[i];
    numStr2 = numStr1 % 10 + '';  
    numStr3 = parseInt(numStr1 / 10) + '';
    let res = numStr2 + numStr3;
 
    if (numStr2 == 0) {
      console.log(numArr[i]);
    } else {
      console.log(parseInt(res));
    }
  }
}
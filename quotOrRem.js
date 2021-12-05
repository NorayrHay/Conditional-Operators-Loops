'use strict'

function quotientAndRemainder(num) {
    let sum = 0;
    let product = 1;
    let quotRes = 0;
    let remRes = 0;
    let strNum = '' + num;
  
    for (let i = 0; i < strNum.length; i++){
      product *= parseInt(strNum[i]);
      sum += parseInt(strNum[i]);
    }  
      if(parseInt(strNum) === 0)  return 'not define';
      else if(parseInt(strNum) > -10 && parseInt(strNum) < 10)   return 'quotient is 1.';
      if((product / sum) % 1 == 0){ 
        quotRes = product / sum; 
        return 'quotient is ' + quotRes;
      } else {
        remRes = product % sum;
        return 'remainder is ' + remRes;
      }
  }
  console.log(quotientAndRemainder(0));
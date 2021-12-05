'use strict'

function reverseNumItems(num, result) {
    let strNum = num + "";
    let lastIndex = parseInt(num % 10);
    let firstIndex = 0;
    let count = 0;
    let newNum1 = 0;
    let newNum2 = 0;
    
    for (let i = 0; i < strNum.length; i++) {
        if (strNum > -10 && strNum < 10)   return (parseInt(strNum));
      count++;
      firstIndex = strNum[0];
    }
  
    newNum1 = (parseInt(strNum / 10));
    newNum2 = parseInt(newNum1 % (Math.pow(10, (count - 2))));
    result = '' + lastIndex + newNum2 + firstIndex;
    return parseInt(result);
  }
  console.log(reverseNumItems(4485932));
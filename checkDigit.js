'use strict'

function findDigit(num, dig) {

    let strNum = num + "";
    let myNum = 0;
    for (let i = 0; i < strNum.length; i++) {
      if(strNum[i] == dig) {
        myNum = parseInt(strNum[i]);
      }
    }
        if (myNum === dig) {
        return 'Yes';
      } else {
        return 'No';
      }
  }
  console.log(findDigit(2543, 5));
'use strict'

function findSign(numArr) {

    let count = 0;
    for (let i = 0; i < numArr.length; i++){
  
      if (numArr[i] < 0) {
        count++;
      }
      if (numArr[i] === 0){
        return 'unsigned';
      }
    }   
        if (count % 2 === 0)   return('+');  
        else    return('-');
  }
  console.log(findSign([-14, 5, -2]));
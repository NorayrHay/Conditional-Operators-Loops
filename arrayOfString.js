'use strict'

function makeStrArr(str) {
    let string = '';
    
     for (let i = 0; i < str.length; i++){
       if(str[i] !== ',' && str[i] !== '.'){
         string += str[i];
       }
     }
     return string.split(" ");    
  }
  console.log(makeStrArr('May the Force be with you.'));
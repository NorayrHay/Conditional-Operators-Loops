'use strict'

function itemsToIndex(itemArr,myUndefineds){
    let indexArr = [];
    
    itemArr.sort((a, b) => {
      return a - b;
  });
  
    for (let i = 0; i <= itemArr[itemArr.length - 1]; i++){
      indexArr.push(i);
    }
    for (let i = 0; i < indexArr.length; i++){
      for (let j = 0; j < itemArr.length; j++){
        for (let m = indexArr[itemArr[j] + 1]; m < indexArr[itemArr[j + 1]]; m++) {
          indexArr[m] = undefined;
        }
      }
    }
  return indexArr;
  }
  console.log(itemsToIndex([4, 3, 0, 9]));
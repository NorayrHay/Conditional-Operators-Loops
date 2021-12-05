'use strict'

function filterAndSort(arr) {
    let newArr = [];
    let count = 0;
    let res = [];
    let result = [];
  
    for(let i = 0; i < arr.length; i++) {
      if(typeof(arr[i]) === 'number') {
        newArr.push(arr[i]);
      }
    }
  
    for(let j = 0; j < newArr.length; j++) {
      if(newArr[j] % 2 !== 0){
        res.push(newArr[j]);
      }
      else{
        result.push(newArr[j]);
      }
    }
    return res.concat(result);
  }
  console.log(filterAndSort([8, 0, 1, 'hey', 12, 5 , true, '2', null, 7, 3]));
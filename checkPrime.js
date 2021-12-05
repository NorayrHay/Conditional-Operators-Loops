"use strict"

function checkPrime(n){

    if (n === 1) {
        return "no";
    }
    else if(n === 2) {
        return "yes"
    }
      
    for (let i = 2; i < n; i++) {
      if (n % i === 0)  return "no";
    }
    for (let i = 2; i < n; i++){
      if (n % i === 1)  return "yes";
    }
}
console.log(checkPrime(4));
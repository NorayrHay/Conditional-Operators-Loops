'use strict'

let triangleArr1 = [45, 90];
let triangleArr2 = [30, 30];
let triangleArr3 = [75, 25];
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let angle1 = null;
let angle2 = null;
let angle3 = null;

for (let i = 0; i < triangleArr1.length, i < triangleArr2.length, i < triangleArr3.length; i++) {
  
    sum1 += triangleArr1[i]; 
    angle1 = 180 - sum1;
    sum2 += triangleArr2[i];
    angle2 = 180 - sum2;
    sum3 += triangleArr3[i];
    angle3 = 180 - sum3;
  }
   console.log("1.first triangle's angle is  " + angle1, "     2.second triangle's angle is  " + angle2, "      3.third triangle's angle is  " + angle3);
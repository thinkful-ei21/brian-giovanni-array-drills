'use strict';

const maxSum = (array)=>{

  let max = Number.NEGATIVE_INFINITY;
   
  for (let a = 0; a < array.length; a++) {
   
    for (let b = a+1; b < array.length; b++) {
        
      let sum = 0;
      array.slice(a,b).forEach(x => sum += x);
      console.log(array.slice(a,b));
      if(sum > max){
        max = sum;
      }
    }        
  }
   
  return max;
};
   
   
console.log(maxSum([4,6,-3,5,-2,1]));
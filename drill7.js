'use strict';

const products = function(arr){
  let sumarray = [];
  ////iterate
  for(let i = 0; i < arr.length; i++ ){
    let sum = 1;
    
    for(let j = 0; j < arr.length; j++){
       
        if(i === j){

        }else {
        console.log(sum);
        sum = sum * arr[j];
      }
      

    }
    sumarray.push(sum);
  }
  return sumarray;
};

const input = [1, 3, 9, 4];
products(input);

console.log(products(input));
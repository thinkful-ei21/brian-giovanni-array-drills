'use strict';

//const Memory = require('Memory');
const Array = require('./practicearray.js');
// const arr = new Array();



function main(){
  //Array.SIZE_RATIO = 3;
      
  let arr = new Array();
  
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  // this should be an array in memory, starting ptr3 = index 0 [5,15,19,45,10]
 
  
  arr.pop();
  arr.pop();
  arr.pop();

  // this should be an array in memory, starting ptr3 = index 0 [5,15]

  console.log(arr.get(0));

  arr.delete();
  arr.push("tauhida");

  console.log(arr.get(0));

  //the result here is NaN because the memory space in which we are creating our array will only take 64-bit floating point numbers 



}

main();

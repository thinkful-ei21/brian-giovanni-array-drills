'use strict';


const mergeArr = (arr1,arr2)=>{

  let result = [];
  let x = 0;
  let y = 0;

  while(x+y < arr1.length + arr2.length ){
    console.log(arr1[x],arr2[y]);
    if(arr1[x] < arr2[y] || arr2[y] === undefined ){
      result.push(arr1[x]);
      x++;
    }
    else {
      result.push(arr2[y]);
      y++;
    }
  }
  return result;        
};

console.log(mergeArr([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
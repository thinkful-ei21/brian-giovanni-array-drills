'use strict';

const twoD = (array)=>{

  let horizontal = [];
  let vertical = [];

  for (let a = 0; a < array.length; a++) {
    
    for (let b = 0; b < array.length; b++) {
      
      if(array[a][b] === 0 ){
        horizontal.push(a);
        vertical.push(b);
      }
    }
  }
  
  for (let a = 0; a < array.length; a++) {
    
    for (let b = 0; b < array.length; b++) {
      
      if(horizontal.includes(a) || vertical.includes(b)){
        array[a][b] = 0;
      }
      
    }
  }

  return array;

};


console.log(twoD(
  [[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]]
));
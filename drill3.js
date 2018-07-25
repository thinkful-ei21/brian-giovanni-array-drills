'use strict';

const filterArray = function(array){

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element < 5){
      array.splice(index , 1 );
      index--;
    }
        
  }
};
const arrays = [10,6,7,3,1];
filterArray(arrays);
console.log(arrays);
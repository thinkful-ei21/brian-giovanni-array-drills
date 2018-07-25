'use strict';


const strRotation = (str1,str2)=>{
  if(str1.length !== str2.length){
    return false;
  }
  else{
    for (let a = 0; a < str1.length; a++) {

      let lettersMatch = true;
      for (let b = 0; b < str1.length; b++) {
        let offset = a+b >= str1.length ? a+b - str1.length : a+b;
            
        if(str1[b] !== str2[offset]){
          lettersMatch = false;}
      }
      if(lettersMatch ===true){return true;}
    }
  }
  return false;

};


console.log(strRotation('amazon', 'azonam'));
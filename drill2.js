'use strict';


const urlify = (str) =>{
  let newstr = '';
  for (let index = 0; index < str.length; index++) {
    if(str[index] === ' '){
      newstr += '%20';
    }
    else{
      newstr += str[index];
    }
  }
  return newstr;    
};


console.log(urlify('www.thinkful.com /tauh ida parv een'));




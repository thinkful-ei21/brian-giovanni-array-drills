'use strict';


const removeChar = (str, rem) =>{
  let result = '';

  for (let index = 0; index < str.length; index++) {
    if(!rem.includes(str[index])){
      result += str[index];
    } 
  }
  return result;

};

console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
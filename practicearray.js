'use strict';
const mem = require('./memory');
const Memory = new mem();
console.log(Memory);

class Array {
  constructor(){
    this.length = 0;
    this.ptr = Memory.allocate(this.length);
  }

  Push(value){
    this._resize(this.length + 1);
    Memory.set(this.ptr + this.length, value);
    this.length++; 
  }

  _resize(size){
    const oldPtr = this.ptr;
    
    this.ptr = Memory.allocate(size);
    if (this.ptr === null){
      throw new Error ('no more memory');
    }
    Memory.copy(this.ptr, oldPtr, size);
    Memory.free(oldPtr);
  }
}

// function main(){
//   //Array.SIZE_RATIO = 3;
    
//   let arr = new Array();

//   arr.push(3);
//   console.log(arr);
// }

// main();
'use strict';
const mem = require('./memory');
const Memory = new mem();
// console.log(Memory);


class Array {
  constructor(){
    this.length = 0;
    this.capacity =0;
    this.ptr = Memory.allocate(this.length);
    this.RATIO = 3;
  }
  

  push(value){
    
    if (this.length +1 > this.capacity){
      this._resize((this.length +1) * this.RATIO);
    }
    Memory.set(this.ptr + this.length, value);
    this.length++; 
  }

  pop(){
    if(this.length === 0){return new Error('index can\'t be negative');}
    this.length = this.length-1;
    return Memory.get(this.ptr + this.length);
  }

  get(index){
    if(index < 0 ){return new Error('index can\'t be outside of array');}
    if(index > this.length -1){return new Error('index can\'t be outside of array');}
    return Memory.get(this.ptr + index);
  }

  delete(){
    this.length = 0;
  }

  _resize(size){
    const oldPtr = this.ptr;
    
    this.ptr = Memory.allocate(size);
    if (this.ptr === null){
      throw new Error ('no more memory');
    }
    this.capacity = (size);
    Memory.copy(this.ptr, oldPtr, size);
    Memory.free(oldPtr);
  }
}

module.exports = Array;
// function main(){
//   //Array.SIZE_RATIO = 3;
    
//   let arr = new Array();

//   arr.push(3);
//   console.log(arr);
// }

// main();
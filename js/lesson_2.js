// ----------

// const array = ['rt', 2, 3, 7, 'f'];

// const firslEl = array[0];
// console.log('Первый элемент -', firslEl);

// const lastEl = array[array.length - 1];
// console.log('последний элемент -', lastEl);

// console.log(array[2]);

// ----------  Кикл For  ------

// const array = ['Hello world', null, true, 15];

// for (let i = 0; i < array.length; i += 1) {
//   const item = array[i];
//   console.log(item);
// }

// ---------  Цикл ForOFF  -----

// const array = ['Hello world', null, true, 15];

// for (const item of array) {
//   console.log(item);
// }

// ------- с помощью For   -------

// const array = ['Hello world', null, 'dtdtf', true, 15];

// for (let i = 0; i < array.length; i += 1) {
//   if (typeof array[i] === 'string') {
//     array[i] = 'OK';
//   }
// }
// console.log(array);

// ------ с помощью For Of ---

// const array = ['Hello world', null, 'dtdtf', true, 15];

// for (let item of array) {
//   if (typeof item === 'string') {
//     const i = array.indexOf(item);
//     array[i] = false;
//   }
// }

// console.log(array);

// -----------------
// function sayHi() {
//   console.log('Hello, this is my first function');
// }
// sayHi();

// ------------
let block = [2, 4, 6, 7, 9];

const newEl = block.slice(2, 8);
console.log(block);
console.log(newEl);

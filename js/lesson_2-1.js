// ----------
// const array = ['Hello World', 3, 7, false, null, true, 15];
// console.log(array[5]);

// const lastEl = array[array.length - 1];
// console.log(lastEl);

// const lastIDX = array.length - 1;
// console.log(lastIDX);
// console.log(object);

// -------------
// const array = ['Hello World', 3, 7, false, null, true, 15];
// for (let i = 0; i < array.length; i += 1) {
//   item = array[i];
//   console.log(item);
// }

// --------
// const array = ['Hello World', 3, 7, false, null, true, 15];
// for (const item of array) {
//   console.log(item);
// }

// ---
// const array = ['Hello World', 7, null, true, 15];
// array[0] = 2;

// for (const item of array) {
// }

// --------- Замена данных в масиве ------
// const array = ['Hello World', 7, 'ttt', null, true, 15];

// for (let i = 0; i < array.length; i += 1) {
//   if (typeof array[i] === 'string') {
//     array[i] = 'OK';
//   }
// }
// console.log(array);

//------
// const array = ['Hello World', 7, 'ttt', null, true, 15];

// for (let item of array) {
//   if (typeof item === 'string') {
//     item = 'Z';
//   }
//   console.log(item);
// }
// console.log(array);

// ------- приметивные типы данных по ЗНАЧЕНИЮ ---
// let a = 15;
// let b = a;

// b += 1;

// console.log(a); // - 15
// console.log(b); // - 16

// ---- сложные типы данных по ССЫЛКЕ ---
// let a = [1, 2, 3];
// let b = a;

// b.push(4);

// console.log('a', a);
// console.log('b', b);

// ------ push - pop --------
// const nums = [1, 2, 3];
// nums.push(4, 5, 6);
// const del = nums.pop();

// console.log(nums);
// console.log(del);

// ----- shift - unshift -------
// const nums = [1, 2, 3];
// nums.unshift(4, 5, 6);
// const del = nums.shift();

// console.log(nums);
// console.log(del);

// -------- slice - не мутирует---
// const nums = [10, 20, 30, 4, 5, 6, 7];
// const result = nums.slice(1, 3);
// console.log(result);

// ----------splice - вырезать - мутирует --
// const nums = [10, 20, 30, 4, 5, 6, 7];
// const result = nums.splice(1, 3);
// console.log(nums);
// console.log(result);

// --- splice - заменить --
// const nums = [10, 20, 30, 4, 5, 6, 7];
// nums.splice(2, 1, 'ok');

// console.log(nums);

// --------

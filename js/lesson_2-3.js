// -------------------
// const array = ['Hello World', 3, 7, false, null, true, 15];
// console.log(array[5]);

// const lastEl = array[array.length - 1];
// console.log(lastEl);

// const lastIDX = array.length - 1;
// console.log(lastIDX);
// console.log(object);

// -------------------
// const array = ['Hello World', 3, 7, false, null, true, 15];
// for (let i = 0; i < array.length; i += 1) {
//   item = array[i];
//   console.log(item);
// }

// -------------------
// const array = ['Hello World', 3, 7, false, null, true, 15];
// for (const item of array) {
//   console.log(item);
// }

// -------------------
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

//----------------------
// const array = ['Hello World', 7, 'ttt', null, true, 15];

// for (let item of array) {
//   if (typeof item === 'string') {
//     item = 'Z';
//   }
//   console.log(item);
// }
// console.log(array);

// ------- приметивные типы данных по ЗНАЧЕНИЮ --------
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

// ------- splice - заменить -------
// const nums = [10, 20, 30, 4, 5, 6, 7];
// nums.splice(2, 1, 'ok');

// console.log(nums);

// ------- метод.splite() ----------
// const name = 'Mango';
// console.log(name.split(' ')); // ["M", "a", "n", "g", "o"]

// const message = 'JavaScript это интересно';
// console.log(message.split(' ')); // ["JavaScript", "это", "интересно"]

// --------- indexOf - работает до первого совпаадения --------

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Poly'];
// console.log(clients.indexOf('Poly')); // 2
// console.log(clients.indexOf('Monkong')); // -1

// --------- метод.includes() ----

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.includes('Poly')); // true
// console.log(clients.includes('Monkong')); // false

// --------- множественные условия includes() -----

// // Выносим варианты в массив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'chwerry';
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }
// console.log('not a red');

//------- метод.push() --- добавляет в конец массива ------

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

//------- метод.pop() -- удаляет последний элемент -----

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// --------- метод slice() -- создаетновый массив -- если условие не указано - сделает копию масива -----

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// -----   если указано одно отрицательное значение - возьмет с конца массива ----

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

// ------- метод splice() --------
// -------- удаление - по индексу -- splice(position, num) ------

// const scores = [1, 2, 3, 4, 5];

// // Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// const deletedScores = scores.splice(0, 3);

// // Теперь массив scores содержит два элемента
// console.log(scores); // [4, 5]

// // А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores); // [1, 2, 3]

// ------ добавление -- по номеру - splice(position, 0, new_element_1, new_element_2, ...) ------

// const colors = ['red', 'green', 'blue'];

// colors.splice(2, 0, 'purple');
// console.log(colors); // ["red", "green", "purple", "blue"]

// -------- замена - по индексу - splice(position, num, new_element_1, new_element_2, ...) --

// const languages = ['C', 'C++', 'Java', 'JavaScript'];

// // Заменяем элемент с индексом 1 на новый
// languages.splice(1, 1, 'Python');
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заменяем один элемент (с индексом 2) на несколько
// languages.splice(2, 1, 'C#', 'Swift', 'Go');
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// -------- метод concat() --- объединяет масивы -- создавая новый ---------

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

// ---------------

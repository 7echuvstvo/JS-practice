// --- Типы рядков---
// ' '  " "  ` `

// const age = 10;
// const totalPrice = 41.5;
// const userName = 'Chelsy';
// const message = 'Добро пожаловать!';
// const isOpen = 'true';
// const souldConfirm = 'false';

// let elementWidth = '50.351px';
// elementWidth = Number.parseFloat(elementWidth);

// console.log('Ширина: ', elementWidth);

// quantity = Number(quantity);
// console.log(typeof quantity);

// let salary = 130.56321;
// salary = salary.toFixed(1);
// salary = Number(salary);

// console.log(salary);

// let salary = 149.766;
// salary = Number(salary.toFixed(2));

// console.log(salary);

// console.log(Number(parseFloat('55546.545as')));

// const base = 5;
// const power = 3;

// const result = Math.max(3, 5, 4, 7);

// console.log(result);
// ---------------------
// let base = prompt('2');
// base = Number(base);

// console.log(base);

// let power = prompt(' в какую степень перевести?');
// power = Number(power);

// console.log(power);

// const result = base ** power;

// console.log(result);
// ---------------------------
// let base = prompt('push thr tempo');
// base = Number(base);
// console.log(base);

// let power = prompt('stepen');
// power = Number(power);
// console.log(power);

// const result = base ** power;
// console.log(result);
// -------------------------
// const max = 70;
// const min = 1;
// const result = Math.round(Math.random() * (max - min) - min);
// console.log(result);
// ------------------------
// console.log(result);

// const max = 70;
// const min = 1;
// const result = Math.round(Math.random(40, 67));
// console.log(result);

// ---------------------
// const firstName = 'Andrii';
// const lastName = 'Shmatko';
// const type = 'VIP';
// const room = 777;

// const welcomeMsg = `Посетитель ${firstName} ${lastName} заселяется в ${type} номер: ${room}.`;

// console.log(welcomeMsg);
// ---------------------
// const brandName = 'AUDi';
// const edetingName = brandName.toLowerCase();
// console.log(edetingName);
// ----------------------
// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'распродажа';

// const string1 =
//   'Привет, я принц Абдул, это не спам, я предлагаю тебе миллион!!!';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
// const string3 = 'Рекламная кампания HaperInvest';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));
// console.log(string2.includes(blacklistedWord1));

// const normolizedString2 = string2.toLowerCase();
// console.log(normolizedString2.includes(blacklistedWord2));

// ----------------------
//  const str = 'Hello World';
//  console.log(str.slice());
// ----------------------
// console.log('1' == 1);
// console.log('1' === 1);
// ----------------------

// console.log('mango'.indexOf('ngo'));
// ----------------------
// let value = 10.56;
// console.log(value);
// console.log(5 === 5);
// console.log(NaN === NaN);
// ---------------------

// console.log(Number('22'));
// ---------------------
// const value = '10';
// console.log(typeof value);
// console.log(typeof value === 'string');
// ------------
// const sum = 10;
// console.log();
// ---------------
// const value = 7;
// if (value === 1) {
//   console.log(1);
// } else if (value === 5) {
//   console.log(5);
// } else if (value === 7) {
//   console.log(7);
// } else if (value === 10) {
//   console.log(10);
// } else {
//   console.log('default');
// }
// ----------if, if else----------
// const value = 10;
// if (value === 1) {
//   console.log(1);
// } else if (value < 10 && value > 5) {
//   console.log('first', 10);
// } else if (value === 7) {
//   console.log(7);
// } else if (value === 10) {
//   console.log('second', 10);
// } else {
//   console.log('default');
// }
//--------- інструкція  SWITCH -----------
//  Только четкое сравнение
// const value = 'trx';

// switch (value) {
//   case 'arx':
//     console.log('One');
//     break;
//   case 'trx':
//     console.log('Three');
//     break;
//   case 'brx':
//     console.log('Five');
//     break;
//     console.log('default');
// }
//------ Тернарный оператор --------------
// const value = 17;
// value > 15 && value < 20
//   ? console.log('від', 15, 'до', 20)
//   : console.log('try again Brooo');

//-------------------
// const value = 16;
// let message;
// message = value > 15 && value < 20 ? 'від 15 до 20' : 'try again Brooo';
// console.log(message);

// -------- Области Видимости--------  ОБЯЗАТЕЛЬНО!!!!!!
// ----- Глобальная и Локальная(Блочная)
// const
// let

// ------ Глобальная и функциональная ------------
// var

// var num = 10;
// if (true) {
//   var num = 15;
// }
// console.log(num);

// ------- Цикл for --- цикл перебора -------
// for (let i = 4; i <= 12; i += 2) console.log(i);
// ----------------
// const str = 'Hello World';
// for (let i = 0; i < str.length; i += 1) {
//   console.log(str[i]);
// }

// ------  Цикл while -------------

// const str = 'hello bro';
// let i = 0;
// while (i < str.length) {
//   console.log(str[i]);
//   i += 1;
// }

// !!!!!!!!!++++++ Браузер ЗАВИСНЕТ!!!!!!++++++++++

// while (i < str.length) {
//   console.log(str[i]);
// }
// +++++++++++++++++++++++++++++++++++++++++++++=+

//  -------------- Цикл do while ---------------
// const str = 'hello bro';
// let i = 0;
// do {
//   console.log('hello world');
//   i += 1;
// } while (i < 0);

// ------------- break -----------------------
// let idx = -1;
// const str = 'hello world';
// for (let i = 0; i < str.length; i += 1) {
//   if (str[i] === 'l') {
//     idx = i;
//     break;
//   }
// }
// console.log('result', idx);

// ---------------- continue -----------------

// for (let i = 0; i <= 21; i += 1) {
//   if (i % 2 === 0) {
//     console.log('Парне', i);
//     // continue;
//   }
//   console.log('Не парне', i);
// }

// ------------ ТРЕНУВАННЯ  М—1-2 --------

// let message = prompt('Какой цвет светофора?');
// let action;
// if (message) {
//   message = message.toLowerCase();
// }

// if (message === 'red') {
//   action = 'stop';
// } else if (message === 'yellow') {
//   action = 'reddy';
// } else if (message === 'green') {
//   action = 'GO';
// } else {
//   action = 'BE Careful';
// }
// console.log(action);

// ------------- task - 2 -----------------
// function check(text, answer) {
//   let message = prompt(text);
//   if (message) {
//     message = message.toLowerCase();
//   }
//   return message === answer;

//   // console.log(text);
//   // console.log(answer);
// }
// const result = check(
//   'Хоч не літак, а крилатий, без крил не може працювати.',
//   'вітряк'
// );
// // check('Через воду він проходить, а сам з місця вік не скходить.', 'міст');
// console.log(result);

// --------- task - 3 ----------------
// function countVowel(str) {
//   const vowels = 'aeiou';
//   let counter = 0;
//   for (i = 0; i < str.length; i += 1) {
//     if (vowels.includes(str[i].toLowerCase())) {
//       counter += 1;
//     }
//   }
//   return counter;
// }
// console.log(countVowel('HELLO world'));
// --------------------------------------

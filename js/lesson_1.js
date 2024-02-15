// ======== TASK - 1

// const apple = '🍎';
// const appleQuantity = 8;
// const applePrice = 34;
// const appleMessage = `${apple} = ${applePrice * appleQuantity} `;

// const lemon = '🍋';
// const lemonQuantity = 3;
// const lemonPrice = 72;
// const lemonMessage = `${lemon} = ${lemonPrice * lemonQuantity}`;

// const allQuantity = appleQuantity + lemonQuantity;
// const allPrice = `Total price: ${
//   appleQuantity * applePrice + lemonQuantity * lemonPrice
// } грн.`;

// console.log(appleMessage);
// console.log(lemonMessage);

// console.log(`${apple}+${lemon} = ${allQuantity}`);
// console.log(allPrice);

// ======= TASK - 2

// const totalMinutes = 1441;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// const result = `${String(hours).padStart(2, '0')}:${minutes
//   .toString()
//   .padStart(2, '0')}`;

// console.log(result);

// ======= TASK - 3

// const deliv = 25;
// const price = 190;
// const msg = `Total price: ${deliv + price}`;

// console.log(msg);

// ======= TASK - 4

// const incomingValue = false;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;

// console.log(value);

// ============= Lesson 1-2 ===============

// ---- if, else if  -----
// const type = 'of';

// if (type === 'on') {
//   console.log('music is playing');
// } else if (type === 'off') {
//   console.log('NOT music');
// } else {
//   console.log("Is't WORKING");
// }

// ---- switch -----

// const value = 3;
// switch (value) {
//   case 1:
//     console.log('one');
//     break;
//   case 2:
//     console.log('two');
//     break;
//   case 3:
//     console.log('three');
//     break;
//   default:
//     console.log('Nothing');
// }
// =========== Тернарный оператор =======

// const value = 14;

// value >= 15 && value <= 20 ? console.log('okey') : console.log('Not of range');

// ---------------
// const value = 15;
// let message;

// message =
//   value >= 15 && value <= 20
//     ? console.log('okey')
//     : console.log('Not of range');

// =============== Цикл "for" ======================
//  (инициализация переменной; проверка условия; что сделать )

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);
// }

// for (let i = 0; i <= 17; i += 1) {
//   if (i % 2 === 0) {
//     console.log('Четное', i);
//     continue;
//   }
//   console.log('Не четное', i);
// }

// ========  Practice  ============

// -------- Task - 1 -----------

// let msg = prompt("What's color?");
// let action;
// if (msg) {
//   msg = msg.toLocaleLowerCase();
// }

// if (msg === 'red') {
//   action = 'STOP';
// } else if (msg === 'yellow') {
//   action = 'REDDY';
// } else if (msg === 'green') {
//   action = 'GO';
// } else {
//   action = 'Wrong color';
// }
// console.log(action);

// ------ Task - 2 ----

// let msg = prompt("What's color?");
// let action;

// if (msg) {
//   msg = msg.toLocaleLowerCase();
// }

// switch (msg) {
//   case 'red':
//     action = 'stop';
//     break;
//   case 'yellow':
//     action = 'reddy';
//     break;
//   case 'green':
//     action = 'GO!';
//     break;
//   default:
//     action = "Is't working";
// }

// console.log(action);

// -------  Task - 3  ------

// function check(text, answer) {
//   let msg = prompt(text);
//   if (msg) {
//     msg = msg.toLocaleLowerCase();
//   }
//   return msg === answer;
// }
// const result = check(
//   'Хоть не самолет, а крылья есть, без них не может работать',
//   'самолет'
// );

// const result2 = check(
//   'Через воду он проходит а сам сместавекне сходит',
//   'мост'
// );
// console.log(result);
// console.log(result2);

// -------  Task - 4  --- цикл While ---

// function getDays(deps) {
//   const daySpeed = 7;
//   const nightSpeed = 2;
//   let total = 0;
//   let days = 0;

//   while (total < deps) {
//     total += daySpeed;
//     days += 1;
//     if (total < deps) {
//       total -= nightSpeed;
//     }
//   }
//   console.log(days);
// }
// getDays(42);

// -------  Task - 5 ------

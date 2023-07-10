// ------ Task 1 -----------
// const nam = 10;
// // if (nam === 10) {
// //   console.log('It`s Ok!');
// // } else {
// //   console.log('Wrong Input. Try it in next time)))');
// // }
// nam === 10
//   ? console.log('It`s Ok!')
//   : console.log('Wrong Input. Try it in next time)))');

// ------ Task  2 --- if else -------
// const time = 45;
// let message;
// if (time > 0 && time <= 15) {
//   message = 'First Part of Hour';
// } else if (time >= 16 && time <= 30) {
//   message = 'Second Part of Hour';
// } else if (time >= 31 && time <= 45) {
//   message = 'Third Part of Hour';
// } else if (time >= 46 && time <= 60) {
//   message = 'Fours Part of Hour';
// } else {
//   message = 'Out of Bounds';
// }
// console.log(message);

// ------ Task ---- else if -------
// const color = 'green';
// let message;

// if (color === 'red') {
//   message = 'Please STOP';
// } else if (color === 'green') {
//   message = 'You can GO!!!';
// } else if (color === 'yellow') {
//   message = 'REDY';
// } else {
//   message = 'Wrong input';
// }
// console.log(message);

// ----- Task --- Switch --
// const dayOfWeek = 'Sat';
// let message;

// switch (dayOfWeek.toLocaleLowerCase()) {
//   case 'mon':
//     message = 'Fist day Of Week';
//     break;
//   case 'tu':
//     message = '2th day';
//     break;
//   case 'wed':
//     message = '3th Day';
//     break;
//   case 'thr':
//     message = '4th dayOfWeek';
//     break;
//   case 'fr':
//     message = 'Work STOPing';
//     break;
//   case 'sat':
//   case 'san':
//     message = 'WeekEnd - enjoying  ';
//     break;
//   default:
//     message = 'Not of week day';
// }
// console.log(message);

// ------- Task -- While --
// let counter = 10;
// while (counter <= 20) {
//   console.log(counter);
//   counter += 1;
// }

// ---- Task -- PROMPT - toLowerCase  - alerrt ----
// const questions = prompt('Did Yoyu know?').toLocaleLowerCase();
// if (questions === 'yes') {
//   alert('Cool!');
// } else {
//   alert('Wrong!!!');
// }

// --
// const message = 'Did Yoyu know?';
// const questions = prompt(message).toLowerCase();
// alert(questions === 'yes' ? 'good' : 'Bad');

// ------ Task --padStart --parseInt ----
// const globalMinuts = 62;
// const hours = String(parseInt(globalMinuts / 60)).padStart(2, 0);
// const minutes = String(globalMinuts % 60).padStart(2, 0);

// console.log(`Time is: ${hours}:${minutes}`);

// ----- Task ---
// const max = 15;
// const min = 1;
// let total = 0;

// for (let i = max; i >= min; i--) {
//   if (i % 2 !== 1) {
//     continue;
//   }
//   console.log('Парні числа: ', i);
//   total += i;
// }
// console.log(`Сума чисел: ${total}`);

// ----

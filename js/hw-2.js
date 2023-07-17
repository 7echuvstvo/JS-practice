// ----- 01 -----

// ----- 02 -----

// ----- 03 -----
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }

//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }

//   return 'The order is accepted, our manager will contact you';
// }

// ----- 04 -----

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.log(fruits);

// ----- 05 -----

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// ----- 06 -----

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// // Write your code under this line
// fruits[1] = 'peach';
// fruits[3] = 'banana';

// ----- 07 -----

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// // Change code below this line
// const fruitsArrayLength = fruits.length;

// ----- 08 -----

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// // Change code below this line

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// ----- 09 -----
// function getExtremeElements(array) {
//   // Change code below this line

//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];

//   return [firstElement, lastElement];

//   // Change code above this line
// }

// ----- 10 -----

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   if (delimiter === '') {
//     words = message.split('');
//   } else {
//     words = message.split(delimiter);
//   }
//   // Change code above this line
//   return words;
// }

// ----- 11 -----

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   const words = message.split(' '); // Разбиваем строку на отдельные слова
//   const wordCount = words.length; // Получаем количество слов
//   const totalPrice = wordCount * pricePerWord; // Вычисляем общую стоимость гравировки
//   return totalPrice; // Возвращаем результат

//   // Change code above this line
// }

// ----- 12 -----

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimiter); // Объединяем элементы массива в строку с помощью метода join()

//   // Change code above this line
//   return string;
// }

// ----- 13 -----

// function slugify(title) {
//   // Change code below this line

//   let slug = title.trim().toLowerCase(); // Удаляем пробелы в начале и конце строки с помощью метода trim()

//   slug = slug.replace(/\s+/g, '-'); // Заменяем пробелы на дефисы с помощью метода replace()
//   return slug;
//   // Change code above this line
// }

// ----- 14 -----

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// ----- 15 -----

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients); // Change this line

// ----- 16 -----

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const newArray = firstArray.concat(secondArray); // Объединяем два массива в один
//   // Если длина нового массива больше maxLength, обрезаем его
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   }
//   // Возвращаем новый массив
//   return newArray;

//   // Change code above this line
// }

// ----- 17 -----

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// ----- 18 -----

// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   // Используем цикл for для сложения всех целых чисел от 1 до number
//   for (let i = 1; i <= number; i++) {
//     total += i;
//   }

//   return total;

//   // Change code above this line
// }

// ----- 19 -----

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ----- 20 -----

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   // Используем цикл for для сложения всех элементов массива order
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   // Change code above this line
//   return total;
// }

// ----- 21 -----

// function findLongestWord(string) {
//   // Change code below this line
//   const words = string.split(' ');
//   let maxLength = 0;
//   let longestWord = '';

//   for (let i = 0; i < words.length; i += 1) {
//     const wordLength = words[i].length;

//     if (wordLength > maxLength) {
//       maxLength = wordLength;
//       longestWord = words[i];
//     }
//   }

//   return longestWord;
//   // Change code above this line
// }

// ----- 22 -----

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

//   // Используем цикл for для генерации чисел от min до max
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// ----- 23 -----

// function filterArray(numbers, value) {
//   // Change code below this line
//   // Создаем пустой массив, в который будем добавлять элементы, удовлетворяющие условию
//   const filteredArray = [];
//   // Итерируемся по каждому элементу массива numbers
//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     if (number > value) {
//       filteredArray.push(number);
//     }
//   }

//   return filteredArray;

//   // Change code above this line
// }

// ----- 24 -----

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   if (fruits.includes(fruit)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// ----- 25 -----

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const commonElements = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     const element = array1[i];

//     if (array2.includes(element)) {
//       commonElements.push(element);
//     }
//   }

//   return commonElements;
//   // Change code above this line
// }

// ----- 26 -----

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const value of order) {
//     total += value;
//   }

//   // Change code above this line
//   return total;
// }

// ----- 27 -----

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// ----- 28 -----

// // Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// ----- 29 -----

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const evenNumbers = [];

//   // Используем цикл for для проверки каждого числа от start до end
//   for (let i = start; i <= end; i += 1) {
//     // Проверяем, является ли текущее число четным
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }

//   return evenNumbers;
//   // Change code above this line
// }

// ----- 30 -----

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break; // Добавляем оператор break, чтобы прекратить выполнение цикла после нахождения первого числа
//   }
// }

// ----- 31 -----

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

//   return undefined;
//   // Change code above this line
// }

// ----- 32 -----

// function includes(array, value) {
//   // Change code below this line
//   // Используем цикл for для проверки каждого элемента массива
//   for (let i = 0; i < array.length; i += 1) {
//     // Если текущий элемент совпадает с искомым значением, возвращаем true
//     if (array[i] === value) {
//       return true;
//     }
//   }

//   // Если не было найдено совпадений, возвращаем false
//   return false;
//   // Change code above this line
// }

// ----- 33 -----

// ----- 34 -----

// ----- 35 -----

// ----- 36 -----

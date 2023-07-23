// ----- 01 -----

// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }

// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// ----- 02 -----

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// // ----примеры использования
// const pizzaName = "Pepperoni";

// const message1 = makeMessage(pizzaName, deliverPizza);
// console.log(message1); // Output: "Delivering Pepperoni pizza."

// const message2 = makeMessage(pizzaName, makePizza);
// console.log(message2); // Output: "Pizza Pepperoni is being prepared, please wait..."

// ----- 03 -----

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// // Change code below this line

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });

// ----- 04 -----

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       const message = onSuccess(pizzaName);
//       return message;
//     } else {
//       const errorMessage = `There is no pizza with a name ${pizzaName} in the assortment.`;
//       const error = onError(errorMessage);
//       return error;
//     }
//   },
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// ----- 05 -----

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   // Change code below this line

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   // Change code above this line

//   return totalPrice;
// }

// ----- 06 -----

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   // Change code below this line

//   numbers.forEach(function (item) {
//     if (item > value) {
//       filteredNumbers.push(item);
//     }
//   });

//   // Change code above this line

//   return filteredNumbers;
// }

// ----- 07 -----

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   // Change code below this line

//   firstArray.forEach(function (item) {
//     if (secondArray.includes(item)) {
//       commonElements.push(item);
//     }
//   });

//   // Change code above this line

//   return commonElements;
// }

// ----- 08 -----

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// ----- 09 -----

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// // Change code above this line

// ----- 10 -----

// // Change code below this line
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };

// // Change code above this line

// ----- 11 -----

// // Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// ----- 12 -----

// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// ----- 13 -----

// function changeEven(numbers, value) {
//   // Change code below this line
//   const updatedNumbers = numbers.map(number => {
//     if (number % 2 === 0) {
//       return number + value;
//     } else {
//       return number;
//     }
//   });

//   return updatedNumbers;

//   // Change code above this line
// }

// ----- 14 -----

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// ----- 15 -----

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// // Change code below this line

// const titles = books.map(book => book.title);

// ----- 16 -----

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];

// // Change code below this line

// const genres = books.flatMap(book => book.genres);

// ----- 17 -----

// // Change code below this line

// const getUserNames = users => {
//   return users.map(user => user.name);

//   };
//   // Change code above this line

// ----- 18 -----

// // Change code below this line
// const getUserEmails = users => {
//   return users.map(user => user.email);
//   };
//   // Change code above this line

// ----- 19 -----

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// ----- 20 -----

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];

// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, arr) => arr.indexOf(genre) === index
// );

// ----- 21 -----

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// ----- 22 -----

// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);

// };
// // Change code above this line

// ----- 23 -----

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {

// return users.filter(user => user.age >= minAge && user.age <= maxAge);
// };
// // Change code above this line

// ----- 24 -----

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(user => user.friends.includes(friendName));
// };
// // Change code above this line

// ----- 25 -----

// // Change code below this line
// const getFriends = (users) => {
//    return [...new Set(users.flatMap(user => user.friends))];

// };
// // Change code above this line

// ----- 26 -----

// // Change code below this line
// const getActiveUsers = (users) => {
//   return users.filter(user => user.isActive);
// };
// // Change code above this line

// ----- 27 -----

// // Change code below this line
// const getInactiveUsers = (users) => {
//   return users.filter(user => !user.isActive);
// };

// // Change code above this line

// ----- 28 -----

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// ----- 29 -----

// // Change code below this line
// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };

// // Change code above this line

// ----- 30 -----

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(num => num % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(num => num % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(num => num % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(num => num % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(num => num % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(num => num % 2 !== 0);

// ----- 31 -----

// // Change code below this line
// const isEveryUserActive = (users) => {
//   return users.every(user => user.isActive);
// };
// // Change code above this line

// ----- 32 -----

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// // Change code below this line

// const anyElementInFirstIsEven = firstArray.some(num => num % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(num => num % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(num => num % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(num => num % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(num => num % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(num => num % 2 !== 0);

// ----- 33 -----

// // Change code below this line
// const isAnyUserActive = users => {
//   return users.some(user => user.isActive);
// };

// // Change code above this line

// ----- 34 -----

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// // Change code below this line

// const totalPlayTime = playtimes.reduce((total, time) => total + time, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// ----- 35 -----

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
//   (total, player) => total + player.playtime / player.gamesPlayed,
//   0
// );

// ----- 36 -----

// // Change code below this line
// const calculateTotalBalance = users => {
//   return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
// };

// // Change code above this line

// ----- 37 -----

// // Change code below this line
// const getTotalFriendCount = users => {
//   return users.reduce((totalFriends, user) => totalFriends + user.friends.length, 0);
// };

// // Change code above this line

// ----- 38 -----

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
// ];

// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const alphabeticalAuthors = [...authors].sort();

// ----- 39 -----

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// ----- 40 -----

// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];

// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort();

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// ----- 41 -----

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// // Change code below this line

// // Сортировка по имени автора в алфавитном порядке
// const sortedByAuthorName = [...books].sort((a, b) =>
//   a.author.localeCompare(b.author)
// );

// // Сортировка по имени автора в обратном алфавитном порядке
// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author)
// );

// // Сортировка по возрастанию рейтинга
// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// // Сортировка по убыванию рейтинга
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// ----- 42 -----

// // Change code below this line
// const sortByAscendingBalance = users => {
//   return [...users].sort((a, b) => a.balance - b.balance);
// };

// // Change code above this line

// ----- 43 -----

// // Change code below this line
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };
// // Change code above this line

// ----- 44 -----

// // Change code below this line
// const sortByName = users => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };
// // Change code above this line

// ----- 45 -----

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b));

// ----- 46 -----

// // Change code below this line
// const getNamesSortedByFriendCount = users => {
//   const usersCopy = users.slice(); // Создаем копию массива users
//   return usersCopy
//     .sort((userA, userB) => userA.friends.length - userB.friends.length)
//     .map(user => user.name);
// };
// // Change code above this line

// ----- 47 -----

// // Change code below this line
// const getSortedFriends = users => {
//   const allFriends = users.reduce((acc, user) => [...acc, ...user.friends], []);
//   const uniqueSortedFriends = [...new Set(allFriends)].sort();
//   return uniqueSortedFriends;
// };
// // Change code above this line

// ----- 48 -----

// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//   const filteredUsers = users.filter(user => user.gender === gender);
//   const totalBalance = filteredUsers.reduce((acc, user) => acc + user.balance, 0);
//   return totalBalance;
// };
// // Change code above this line

// =========================

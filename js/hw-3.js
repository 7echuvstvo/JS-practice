// ----- 01 -----

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// ----- 02 -----

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// ----- 03 -----

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// ----- 04 -----

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line

// ----- 05 -----

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// ----- 06 -----

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

// ----- 07 -----

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: 'Jamaica',
//   city: 'Kingston',
// };

// ----- 08 -----

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };

// ----- 09 -----

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line

//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',

//   // Change code above this line
// };

// ----- 10 -----

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// ----- 11 -----

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }

// ----- 12 -----

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//  for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount++;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// ----- 13 -----

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// ----- 14 -----

// function countProps(object) {
//   const propCount = Object.keys(object).length;
//   return propCount;
//   // Change code above this line
// }

// ----- 15 -----

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// ----- 16 -----

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   for (const key in salaries) {
//     if (salaries.hasOwnProperty(key)) {
//       totalSalary += salaries[key];
//     }
//   }
//   // Change code above this line
//   return totalSalary;
// }

// ----- 17 -----

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors); // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// ----- 18 -----

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }

//   return null;
// }

// console.log(getProductPrice("Scanner")); // 2700
// console.log(getProductPrice("Droid")); // 400
// console.log(getProductPrice("Pen")); // null

// ----- 19 -----

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

// const propValues = [];

//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       propValues.push(product[propName]);
//     }
//   }

//   return propValues;

//   // Change code above this line
// }
// console.log(getAllPropValues("name")); // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("price")); // [1300, 2700, 400, 1200]
// console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
// console.log(getAllPropValues("category")); // []

// ----- 20 -----

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки

//   let totalPrice = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//       break;
//     }
//   }

//   return totalPrice;

//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Radar")); // 5200 (1300 * 4)
// console.log(calculateTotalPrice("Droid")); // 2800 (400 * 7)
// console.log(calculateTotalPrice("Scanner")); // 8100 (2700 * 3)
// console.log(calculateTotalPrice("Grip")); // 10800 (1200 * 9)
// console.log(calculateTotalPrice("Unknown Product")); // 0 (такого продукта нет в массиве)

// ----- 21 -----

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;
// // Change code above this line

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// ----- 22 -----

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// // Change code below this line
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// // Change code above this line

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// ----- 23 -----

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// // Change code above this line

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// ----- 24 -----

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// ----- 25 -----

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// ----- 26 -----

// function calculateMeanTemperature(forecast) {
//   // Change code below this line
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   // Change code above this line

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// ----- 27 -----

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// ----- 28 -----

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];

// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// ----- 29 -----

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };

// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// ----- 30 -----

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   const {
//     text,
//     category: taskCategory = category,
//     priority: taskPriority = priority,
//   } = data;
//   // Change code above this line
//   return { text, completed, category: taskCategory, priority: taskPriority };
// }

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   const {
//     text,
//     category: taskCategory = category,
//     priority: taskPriority = priority,
//   } = data;
//   // Change code above this line
//   return { text, completed, category: taskCategory, priority: taskPriority };
// }

// ----- 31 -----

// // Change code below this line
// function add(...args) {
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
// }
// // Change code above this line

// console.log(add(1, 2, 3)); // Output: 6
// console.log(add(10, 20, 30, 40, 50)); // Output: 150
// console.log(add(5)); // Output: 5

// ----- 32 -----

// // Change code below this line
// function addOverNum(num, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > num) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Output: 45 (сумма чисел от 11 до 20)
// console.log(addOverNum(5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Output: 40 (сумма чисел от 6 до 10)

// ----- 33 -----

// // Change code below this line
// function findMatches(arr, ...args) {
//   const matches = [];

//   for (const arg of args) {
//     if (arr.includes(arg)) {
//       matches.push(arg);
//     }
//   }

//   return matches;
//   // Change code above this line
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); // Output: [1, 2]
// console.log(findMatches([10, 20, 30], 10, 5, 30, 25)); // Output: [10, 30]

// ----- 34 -----

// const bookShelf = {
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// console.log(bookShelf.getBooks()); // Output: "Returning all books"
// console.log(bookShelf.addBook("Harry Potter")); // Output: "Adding book Harry Potter"
// console.log(bookShelf.removeBook("The last kingdom")); // Output: "Deleting book The last kingdom"
// console.log(bookShelf.updateBook("The guardian of dreams", "New Book")); // Output: "Updating book The guardian of dreams to New Book"

// ----- 35 -----

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     const index = this.books.indexOf(oldName);

//     if (index !== -1) {
//       this.books.splice(index, 1, newName);
//     }
//   },
// };

// console.log(bookShelf.books); // Output: ["The last kingdom", "Haze", "The guardian of dreams"]
// bookShelf.updateBook("Haze", "New Book");
// console.log(bookShelf.books); // Output: ["The last kingdom", "New Book", "The guardian of dreams"]

// ----- 36 -----

// const atTheOldToad = {
//   // Change code below this line

//   potions: [],

//   // Change code above this line
// };

// ----- 37 -----

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   // Change code below this line
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
//   // Change code above this line
// };

// ----- 38 -----

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line

//     this.potions.push(potionName);

//     // Change code above this line
//   },
// };

// ----- 39 -----

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line

//     const index = this.potions.indexOf(potionName);
//     if (index !== -1) {
//       this.potions.splice(index, 1);
//     }

//     // Change code above this line
//   },
// };

// ----- 40 -----

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line

//     const index = this.potions.indexOf(oldName);
//     if (index !== -1) {
//       this.potions[index] = newName;
//     }
//     // Change code above this line
//   },
// };

// ----- 41 -----
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],

  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    const { name } = newPotion;
    const potionIndex = this.potions.findIndex(potion => potion.name === name);

    if (potionIndex !== -1) {
      return `Error! Potion ${name} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    const potionIndex = this.potions.findIndex(
      potion => potion.name === potionName
    );

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },

  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.findIndex(
      potion => potion.name === oldName
    );

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions[potionIndex].name = newName;
  },
};

// ========================================================

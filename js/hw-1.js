// ---- 05 ---------
// const productName = 'Droid';
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// console.log(message);

// ----- 06 -----
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(message);

// ----- 07 -----
// function sayHi() {
//   console.log('Hello, this is my first function!');
// }
// sayHi();

// ----- 08 -----
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// ----- 09 -----
// function add(a, b, c) {
//   return a + b + c;
// }

// add(2, 5, 8);

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// ----- 10 -----
// function makeMessage(name, price) {

//   const message = `You picked ${name}, price per item is ${price} credits`;

//   return message;
// }
// console.log(makeMessage(5, 10));

// ----- 11 -----
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   const totalPrice = pricePerItem * orderedQuantity;

//   return totalPrice;
// }

// ----- 12 -----
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));

// ----- 13 -----
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }
// console.log(isValidPassword('jqueryismyjam'));

// ----- 14 -----

// ----- 15 -----
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }
// console.log(checkAge(19));

// ----- 16 -----
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered > available) {
//     message = 'Not enough goods in stock!';
//   } else {
//     ordered >= available;
//     message = 'Order is processed, our manager will contact you.';
//   }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50)); // "Order is processed, our manager will contact you."
// console.log(checkStorage(100, 130)); // "Not enough goods in stock!"
// console.log(checkStorage(200, 20)); // "Order is processed, our manager will contact you."
// console.log(checkStorage(200, 150)); // "Order is processed, our manager will contact you."
// console.log(checkStorage(150, 180));

// ----- 17 -----
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// ----- 18 -----
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity;
//   if (customerCredits < totalPrice) {
//     message = 'Insufficient funds!';
//   } else {
//     // customerCredits >= totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   // Change code above this line
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));

// ----- 19 -----
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     // Change this line
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// console.log(checkPassword(23423443));

// ----- 20 -----
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }

//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));

// ----- 21 -----
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));

// ----- 22 -----
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent('pro'));

// ----- 23 -----
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }
// console.log(isNumberNotInRange(10, 30, 5));

// ----- 24 -----
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }

// console.log(getDiscount(4900));

// --------- 24 - B -----------
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount =
//     // Change code below this line
//     totalSpent >= 50000
//       ? GOLD_DISCOUNT
//       : totalSpent >= 20000
//       ? SILVER_DISCOUNT
//       : totalSpent >= 5000
//       ? BRONZE_DISCOUNT
//       : BASE_DISCOUNT;

//   // Change code above this line
//   return discount;
// }

// console.log(getDiscount(5000));

// ----- 25 -----
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   if (ordered > available) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }

//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 130));

// --------- 25 - B -----------
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you';
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(150, 130));

// ----- 26 -----
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   message =
//     password === ADMIN_PASSWORD
//       ? 'Access is allowed'
//       : 'Access denied, wrong password!';
//   // Change code above this line
//   return message;
// }
// console.log(checkPassword('jqueryismyjam'));

// ----- 27 -----
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case 'starter': // Change this line
//       price = 0; // Change this line
//       break;

//     case 'professional': // Change this line
//       price = 20; // Change this line
//       break;

//     case 'organization': // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// console.log(getSubscriptionPrice('starter'));

// ----- 28 -----
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;
//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;
//     default:
//       message = 'Access denied, wrong password!';
//   }

//   // Change code above this line
//   return message;
// }
// console.log(checkPassword(null));
// console.log(checkPassword('jqueryismyjam'));
// console.log(checkPassword('mangohackzor'));

// ----- 29 -----
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   const priceChina = 100;
//   const priceChile = 250;
//   const priceAustralia = 170;
//   const priceJamaica = 120;

//   switch (country) {
//     case 'China':
//       message = `Shipping to ${country} will cost ${priceChina} credits`;
//       break;
//     case 'Chile':
//       message = `Shipping to ${country} will cost ${priceChile} credits`;
//       break;
//     case 'Australia':
//       message = `Shipping to ${country} will cost ${priceAustralia} credits`;
//       break;
//     case 'Jamaica':
//       message = `Shipping to ${country} will cost ${priceJamaica} credits`;
//       break;
//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }

//   // Change code above this line
//   return message;
// }

// console.log(getShippingCost('Australia'));
// console.log(getShippingCost('China'));
// console.log(getShippingCost('Chile'));
// console.log(getShippingCost('Jamaica'));
// console.log(getShippingCost('Sweden'));
// ----- 30 -----
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// console.log(getNameLength('Poly'));
// console.log(getNameLength('Harambe'));
// console.log(getNameLength('Billy'));
// console.log(getNameLength('Joe'));

// ----- 31 -----
// const courseTopic = 'JavaScript essentials';
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopicLength - 1];
// const threeElemrnt = courseTopic[2];

// // Change code above this line

// console.log(firstElement);
// console.log(lastElement);
// console.log(threeElemrnt);

// ----- 32 -----
// function getSubstring(string, length) {
//   const substring = string.substring(0, length); // Change this line

//   return substring;
// }
// console.log(getSubstring('Hello world', 3));

// ----- 33 --  ???? ---
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + '...';
//   }
//   /// Change code above this line
//   return result;
// }

// ----- 34 -----
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
// console.log(normalizeInput('Hello world'));

// ----- 35 -----
// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line

//   return result;
// }
// console.log(checkForName('Egor Kolbasov', 'Egor'));
// ----- 36 -----
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   const lowercaseMessage = message.toLowerCase();
//   result =
//     lowercaseMessage.includes('spam') || lowercaseMessage.includes('sale');
//   // Change code above this line

//   return result;
// }
// console.log(checkForSpam('Buy this sale amazing product!'));
// console.log(checkForSpam('Great deals for Sale!'));
// console.log(checkForSpam('Great deals for !'));

// +++++++++++++++++++++++++++++++++++++++

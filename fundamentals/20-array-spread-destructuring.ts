const numbers = [1, 2, 3];

//Spread
const moreNumbers = [...numbers, 4, 5, 6];
console.log(moreNumbers);

//Destructuring
const [first, second, third] = moreNumbers;
console.log(first, second, third);
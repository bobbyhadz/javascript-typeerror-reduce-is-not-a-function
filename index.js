// TypeError: reduce is not a function in JavaScript

// EXAMPLE 1 - Only call the `reduce` method on valid arrays

const arr = [1, 2, 3];

const result = arr.reduce((acc, curr) => acc + curr, 0);

console.log(result); // 👉️ 6

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if the value is an array before calling `reduce`

// const arr = null;

// const result = Array.isArray(arr)
//   ? arr.reduce((acc, curr) => acc + curr, 0)
//   : 0;

// console.log(result); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using a simple `if` statement

// const arr = null;

// let result = 0;

// if (Array.isArray(arr)) {
//   result = arr.reduce((acc, current) => {
//     return acc + current;
//   }, 0);
// }

// console.log(result); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert the value to an array before calling `reduce()`

// const set = new Set([1, 2, 3]);

// const result = Array.from(set).reduce(
//   (acc, curr) => acc + curr,
//   0,
// );
// console.log(result); // 👉️ 6

// ------------------------------------------------------------------

// // EXAMPLE 5 - Using the spread syntax

// const set = new Set([1, 2, 3]);

// const result = [...set].reduce((acc, curr) => acc + curr, 0);
// console.log(result); // 👉️ 6

// ------------------------------------------------------------------

// // EXAMPLE 6 - Access a property on an object before calling `reduce`

// const obj = {
//   numbers: [1, 2, 3],
// };

// const result = obj.numbers.reduce((accumulator, current) => {
//   return accumulator + current;
// }, 0);

// console.log(result); // 👉️ 6

// increscent for loop
// let sum = 0;
// for (let i = 0; i <= 5; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// decrement for loop
// let sum = 0;
// for (let i = 5; i >= 1; i--) {
//   sum = sum + i;
// }
// console.log(sum);

// what is recursion? ans: if a function called from inside a function this is call recursion.
function sum(i) {
  if (i === 1) {
    return 1;
  }
  return i + sum(i - 1);
}
const result = sum(5);
console.log(result);

// A function that calls itself is known as recursive function and the approach is called recursion. Recursion makes the code clean, simpler and shorter.

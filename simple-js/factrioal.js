// factorial of 5

// let factorial = 1;
// for (let i = 5; i >= 1; i--) {
//   console.log(i);
//   factorial = factorial * i;
// }
// console.log(factorial);

function factorial(i) {
  if (i === 1) {
    return 1;
  }
  return i * factorial(i - 1);
}
const result = factorial(5);
console.log(result);

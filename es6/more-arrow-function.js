// simple arrow function
const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const multiple = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const divide2 = (num1, num2 = 0) => num1 / num2; // default parameter
// console.log(divide2(2));

// single arrow  function
const sum1 = (sum) => sum1 + 2;

// without parameter
const withOut = () => 3 * 3;
console.log(withOut());
console.log(withOut());

// multiline function
const sum2 = (a, b, c, d, e, f) => {
  const sum = a + b + c + d + e + f;
  return sum;
};

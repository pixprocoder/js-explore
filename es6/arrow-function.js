const add = (num1, num2 = 3) => num1 + num2;
const result = add(3, 5);
const temp = `hello the result is: ${result}
I can easily edit using backtick
here you go
`;
console.log(temp);
console.log(result);

const sum3 = (a, b, c) => {
  return a * b * c;
};
console.log(sum3(2, 3, 3));

console.log(`I am a web developer
I love to code,
I love to eat coffee
`);

const default1 = (a, b = 2) => a + b;
console.log(default1(1));

/**
 * Interview question
 * Difference between function declaration, function expression and arrow function
 */

const my = [3, 4];
my.unshift(2);
console.log(my);

const y = (x) => x * x;
const z = y(5);
console.log(z);

const division = (num1, num2) => console.log(num1 / num2);
console.log(division(4, 2));

const obj = { foo: 1 };
obj.bar = 2;
console.log(obj);

const myObj = { a: 2 };
myObj.b = 6;
console.log(myObj);

function min(nums) {
  return Math.min(...nums);
}
console.log(min([1, 3, 2]));

const cube = (x) => x * x * x * x * x;
console.log(cube(2));

const [a, b] = [1, 2, 3, 4, 45, 5];
console.log(a + b);

// try {
//   const { x, y, z } = { x: 1, y1: 2, z: 3 };
//   console.log(y);
// } catch {}

const numbers = [12, 22, 3];
const output = numbers.map((n) => n);
console.log(output);

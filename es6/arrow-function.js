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

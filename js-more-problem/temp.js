let first = 33;
let second = 50;

// wring approach
// first = second;
// second = first;

// approach 1
// let temp = first;
// first = second;
// second = temp;

// approach 2
[first, second] = [second, first];
console.log(first, second);

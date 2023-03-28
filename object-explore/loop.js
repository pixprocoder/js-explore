const numbers = [12, 55, 2, 465, 24, 6, 3, 22];
// looping in array
// way 1 (for of)
/* for (const number of numbers) {
  console.log(number);
} 
*/
// way 2 (for loop)
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  //   console.log(element);
}

// looping is objects
const pc = {
  processor: "amd 5-600g",
  ram: "12gb",
  ssd: "adata 120gb",
  color: "white",
};

// ways to access from objects
// 1. object.name
// 2. object['name']
// 3. object[variable]

// for in loop use to looping in object
for (const keys in pc) {
  console.log(keys + " = " + pc[keys]);
}

// console.log(pc);

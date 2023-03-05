String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};
let str = "Hello, world!";
console.log(str.reverse()); // !dlrow ,olleH
console.log(str.charAt(4));
console.log(str.charCodeAt(4));
console.log(str.indexOf("e"));
console.log(str.lastIndexOf("e"));
console.log(str.substr(0, 4));
console.log(str.includes("Hello"));
console.log(str.repeat(3));
console.log(str.replace("world", "universe"));
const splitName = str.split(" ");
console.table(splitName);
console.log(splitName[0]);
console.log(typeof splitName);

const name = "kobir";
const age = 19;
const isSmart = true;
const student = { id: 1, name: "sk", school: "pbg" };
const friends = ["amin", "abid", "rezaul", "mubin", "labib"];
function sum(a, b) {
  return a + b;
}

console.log(typeof name);
console.log(typeof age);
console.log(typeof isSmart);
console.log(typeof student);
console.log(typeof sum);
// the right way to check the array
console.log(Array.isArray(friends));
// console.log(typeof friends); // it should be an array but it shows an object.

// check whether the element is there
console.log("yes it is: ", friends.includes("labib"));
// another way
if (friends.indexOf("labib") !== -1) {
  console.log(true);
}

// concat of an array
const newFriends = ["Aprul", "sahrul", "bablu", "shiplu"];
const allFriends = friends.concat(newFriends);
console.log(allFriends);

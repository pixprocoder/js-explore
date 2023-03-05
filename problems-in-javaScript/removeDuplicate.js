// Target: remove duplicate from an array.

// writing the function
function removeDuplicate(names) {
  const unique = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (unique.indexOf(name) === -1) {
      unique.push(name);
    }
  }
  return unique;
}

const friends = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Harry",
  "Ivy",
  "Jack",
  "Alice",
  "David",
  "Frank",
  "Grace",
  "Ivy",
];

const uniqueName = removeDuplicate(friends);
console.log(uniqueName.length);

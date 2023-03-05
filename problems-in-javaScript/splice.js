const friends = [22, 5, 24, 66, 11, 73, 223, 55, 668, 32, 26, 221];
console.log("main array: ", friends);

const partial = friends.splice(0, 9, 33, 55, 44, 77);
console.log("splice: ", partial);
console.log("after splice: ", friends);

// add item to the splice
console.log("added: ", friends);

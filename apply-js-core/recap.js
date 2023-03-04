// 1. variable
var name = "myName";
// math operation: +, -, *, /
// shorthand: +=, -=, *=, /=, ++, --

// 2. Array
var friends = ["amin", "abid mia", "tahmid", "ab rohman", "labib"];
var thirdFriend = friends[2];
friends[3] = "Abdullah";

// 3. conditions
// <, > , <=, >=, ==, ===, !=, !==
if (friends.length < 3) {
  // do some work
} else {
  // do other things
}

// 4. loop
var number = 0;
while (number <= 10) {
  // do work
  number++;
}

for (var i = 0; i <= 10; i++) {
  // do work
}

// 5. function
function isSmart(boy) {
  if (boy === "kobir") {
    return true;
  }
}
isSmart("kobir");

// object
var product = {
  name: "bottle",
  color: "red",
  price: 323,
};

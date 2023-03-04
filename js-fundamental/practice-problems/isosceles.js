// Define the variables
let side1 = 9;
let side2 = 8;
let side3 = 9;

// Check if the triangle is isosceles using if-else statements
if (side1 === side2 || side2 === side3 || side1 === side3) {
  console.log("The triangle is isosceles.");
} else {
  console.log("The triangle is not isosceles.");
}

// from a quiz
var i = 0;
for (i = 0; i < 5; i++) {}
console.log(i);

var marks = [13, 15, 14, 20, 18];
for (var i = 0; i < marks.length; i++) {
  if (marks[i] >= 15) {
    continue;
  }
  console.log(marks[i]);
}

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

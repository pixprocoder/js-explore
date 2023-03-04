var marks = [85, 66, 95, 56, 40];

if (marks >= 85 && marks <= 100) {
  console.log("A+");
} else if (marks >= 70 && marks < 85) {
  console.log("A");
} else if (marks >= 60 && marks < 70) {
  console.log("B");
} else if (marks >= 40 && marks < 60) {
  console.log("C");
} else if (marks >= 33 && marks < 40) {
  console.log("F");
} else {
  console.log("you are fail");
}

var numbers = [13, 79, 45];

for (let i = 0; i < numbers.length; i++) {
  console.log(i);
}

for (let i = 0; i < numbers.length; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

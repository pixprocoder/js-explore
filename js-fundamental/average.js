// 75.25, 65, 80, 35.45, 99.50

let mathematicsMark = 75.25;
let biologyMark = 65;
let chemistryMark = 80;
let banglaMark = 35.45;
let englishMark = 99.5;

let totalMarks =
  mathematicsMark + biologyMark + chemistryMark + banglaMark + englishMark;
console.log(totalMarks);

// calculate the average marks
let averageMark = totalMarks / 5;

// show in 2 decimal
let averageTwoDecimal = averageMark.toFixed(2);

// convert to a floating number
let result = parseFloat(averageTwoDecimal);

console.log(result);

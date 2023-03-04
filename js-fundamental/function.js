/**
 * Function cases
 * No return & No parameter
 * Has return & No parameter
 * No return & Has parameter
 * Has return & Has parameter
 */

function getAverage(assignment1, assignment2, assignment3) {
  const totalMarks = assignment1 + assignment2 + assignment3;
  const average = totalMarks / 3;
  return average;
}

let assignment1 = 55;
let assignment2 = 40;
let assignment3 = 60;

const result = getAverage(assignment1, assignment2, assignment3);
const twoDecimal = result.toFixed(2);

console.log(parseFloat(twoDecimal));

function sumOfAnArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
  }
  return sum;
}

// get odd numbers
function getOddNumbersOfAnArray(numbers) {
  let oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 2 !== 0) {
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}

const numbers = [22, 35, 22, 56, 66, 91, 100, 1, 63, 7, 532];
const oddNumbersArray = getOddNumbersOfAnArray(numbers);

// console.log(oddNumbersArray);

const total = sumOfAnArray(numbers);
const oddNumberSum = sumOfAnArray(oddNumbersArray);
console.log(oddNumberSum);
// console.log(total);

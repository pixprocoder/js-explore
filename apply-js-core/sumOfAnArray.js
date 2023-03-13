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

// get even number
function getEvenNumbersOfAnArray(numbers) {
  const evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 2 === 0) evenNumbers.push(element);
  }
  return evenNumbers;
}

const numbers = [22, 40, 22, 56, 66, 91, 100, 1, 63, 2, 7, 3, 532];
// sumOfAnArray
const total = sumOfAnArray(numbers);
// console.log(total);

const oddNumbersArray = getOddNumbersOfAnArray(numbers);
const oddNumberSum = sumOfAnArray(oddNumbersArray);
// console.log(oddNumbersArray);
// console.log(oddNumberSum);

// get even numbers and sum
const evenNumbers = getEvenNumbersOfAnArray(numbers);
const evenNumbersSum = sumOfAnArray(evenNumbers);
// console.log(evenNumbers);
console.log(evenNumbersSum);

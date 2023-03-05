function getLargest(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

const numberArray = [112, 11, 443, 44, 112, 54, 114, 203];
const result = getLargest(numberArray);
// console.log(result);

// Find the smallest number of an array
function getSmallestNumber(numbers) {
  let smallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < smallest) {
      smallest = element;
    }
  }
  return smallest;
}

const numbers = [112, 11, 443, 44, 112, 54, 114, 203];
const smallest = getSmallestNumber(numbers);
console.log("The smallest number is: ", smallest);

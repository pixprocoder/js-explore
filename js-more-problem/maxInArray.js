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
console.log(result);

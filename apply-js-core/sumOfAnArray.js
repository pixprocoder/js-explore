function sumOfAnArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
  }
  return sum;
}

const numbers = [22, 35, 22, 56, 66, 91, 100, 532];
const total = sumOfAnArray(numbers);
console.log(total);

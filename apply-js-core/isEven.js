function isEven(number) {
  const even = number % 2;
  if (even === 0) return true;
  return false;
}

const myNumberIsEven = isEven(462);
// const hisNumberIsEven = isEven(2);

console.log("my number is even ", myNumberIsEven);
// console.log("His number is even ", hisNumberIsEven);

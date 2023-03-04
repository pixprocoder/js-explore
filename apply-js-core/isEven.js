function isEven(number) {
  const even = number % 2;
  if (even === 0) {
    return true;
  } else {
    return false;
  }
}

const myNumberIsEven = isEven(46);
const hisNumberIsEven = isEven(445);

console.log("my number is even ", myNumberIsEven);
console.log("His number is even ", hisNumberIsEven);

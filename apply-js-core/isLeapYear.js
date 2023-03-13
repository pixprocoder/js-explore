function isLeapYear(year) {
  const leapYear = year % 4;
  if (leapYear === 0) {
    return true;
  }
  return false;
}

const myYear = isLeapYear(2140);
const yourYear = isLeapYear(2000);

console.log("my year is leap year: ", myYear);
console.log("Your year is leap year: ", yourYear);

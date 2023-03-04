function inchToFeet(inches) {
  const feet = inches / 12;
  return feet;
}

const myInches = 120;
const myFeet = inchToFeet(myInches);
console.log(myFeet);

function mileToKilometer(mile) {
  const kilometer = mile * 1.609344;
  return kilometer;
}

const upzelaToSylhet = 20;
const totalKilometer = mileToKilometer(upzelaToSylhet);
const convertedToFixedAndParsed = parseFloat(totalKilometer.toFixed(2));
console.log(convertedToFixedAndParsed);
// console.log(totalKilometer);

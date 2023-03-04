//  loop break
// for (let i = 0; i < numbers.length; i++) {
//   let number = numbers[i];
//   if (number > 110) {
//     break;
//   }
//   console.log(number);
// }

let numbers = [22, 65, 111, 4, 11, 55, 555, 10, 44, 14];
// loop continue
// for (let i = 0; i < numbers.length; i++) {
//   let number = numbers[i];
//   if (number > 50) {
//     continue;
//   }
//   console.log(number);
// }
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  if (number === 65) {
    console.log("first");
  } else if (number === 4) {
    console.log("second");
  }
  console.log(number);
}

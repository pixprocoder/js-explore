const max = Math.max(2, 45, 64, 23, 3);
const min = Math.min(2, 45, 64, 23, 3);
// console.log(max);
// console.log(min);

const myArr = [2, 5, 33, 23, 555, 6];
const largest = Math.max(...myArr);
// console.log(largest);

myArr.push(20);
myArr.push(45);
myArr.unshift(35);
const myArr2 = [3, 4, ...myArr, 33];
myArr2.push(444);
// const myArr3 = myArr2;
console.log(myArr);
console.log(myArr2);

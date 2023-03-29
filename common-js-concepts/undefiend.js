/**
 * Ways to get undefined
 * 1. variable that is not initialized
 * 2. function that has no return
 * 3. parameter that is not passed will be undefined
 * 4. if return has nothing the right side will return undefined
 * 5. property that doesn't exists on an Object will return undefined
 * 6. accessing Array elements outside of the index range will return undefined
 * 7. deleting an element inside an Array
 * 8. set a value directly to undefined
 *
 */

let first;

function myFunc(a, b) {
  const total = a + b;
}
const result = myFunc(2, 3);

function myFunc2(a, b, c) {
  const total = a + b + c;
  //   console.log(a, b, c);
}
myFunc2(1, 2);

function myFunc3(a, b) {
  if (a < 0 || b < 0) {
    return;
  } else {
    return a + b;
  }
}
// console.log(myFunc3(1, -5));

const myObj = { id: 1, name: "rabi" };
// console.log(myObj.id, myObj.price);

const myArr = [2, 3, 5, 6];
// delete myArr[1]; (I shouldn't do that instead use splice)
// console.log(myArr);
// console.log(myArr[2], myArr[5], myArr[233]);

const eighth = undefined;
const ninth = null;
// console.log(typeof ninth);
// console.log(eighth);

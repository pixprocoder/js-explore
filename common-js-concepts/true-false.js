/* 
Truthy:
1. true
2. any number (positive, negative) other than 0
3. any string other than empty string
4. {}
5. []


Falsy:
1. false
2. 0
3. '' (empty string)
4. undefined
5. null
*/

const x = " ";
if (!!x) {
  console.log("Truth");
} else {
  console.log("false");
}

function reverseChar(text) {
  let reversedText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    reversedText = reversedText + element;
  }
  return reversedText;
}

const myStr = "I am a good boy";
const reversed = reverseChar(myStr);
console.log(reversed);

function reverseWords(text) {
  const textSplit = text.split(" ");
  const reversed = [];
  for (let i = text.length - 1; i >= 0; i--) {
    const element = textSplit[i];
    reversed.push(element);
  }
  const result = reversed.join(" ");
  return result;
}

const myStr = "how are you";
const result = reverseWords(myStr);
console.log(result);

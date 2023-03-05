// split, slice, concat, substring, indexOf, lastIndexOf
const sentence =
  "hello how are you. I am fine. what about you. yes I have done this. welcome.";
const splitSentence = sentence.split(".");
console.log(splitSentence);

// join
const arr = [
  "hello how are you",
  " I am fine",
  " what about you",
  " yes I have done this",
  " welcome",
  ,
];
const joinSentence = arr.join(".");
console.log(joinSentence);

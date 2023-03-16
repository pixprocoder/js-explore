const student = {
  name: "kabir",
  rool: 22,
  batch: "GB-1780",
  location: "Sylhet",
  country: "Bangladesh",
};

//   get properties from an object
let studentName = student.name; // System 1
let studentBatch = student["batch"]; // System 2
let studentLocation = "location"; // system 3
let propertyValue = student[studentLocation];
// console.log(propertyValue);
// console.log(studentBatch);
// console.log(studentName);

console.log(student);

// get all keys and values  of an object
// console.log(allKeys);
let allKeys = Object.keys(student);
// console.log(allValues);
let allValues = Object.values(student);

// set properties value
student.name = "sahrul"; // System 1
student["batch"] = "gb-2000"; // System 2
student[propertyValue] = "Dhaka";
console.log(student);

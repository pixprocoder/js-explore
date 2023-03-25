const friends = {
  id: 1,
  name: "Rahim",
  address: {
    house: "x tower",
    state: "upshor 3/2",
    deistic: "Sylhet",
  },
  age: 23,
  job: "student",
};

const stringified = JSON.stringify(friends);
const parsed = JSON.parse(stringified);
console.log(stringified);
console.log(parsed);

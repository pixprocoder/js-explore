function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Please enter a valid number";
  }
  return a + b;
}

const result = add(2, 5);
console.log(result);

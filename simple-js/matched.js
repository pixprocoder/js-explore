const products = [
  { id: 1, name: "iPhone X", price: 999, color: "Silver" },
  { id: 2, name: "Galaxy S9", price: 799, color: "Black" },
  { id: 3, name: "Pixel 2", price: 649, color: "White" },
  { id: 4, name: "iPhone X", price: 999, color: "Gold" },
  { id: 5, name: "galaxy S9", price: 799, color: "Blue" },
  { id: 6, name: "Pixel 2", price: 649, color: "Black" },
  { id: 7, name: "iPhone X", price: 999, color: "Space Gray" },
  { id: 8, name: "galaxy S9", price: 799, color: "Gray" },
  { id: 9, name: "Pixel 2", price: 649, color: "Blue" },
  { id: 10, name: "iPhone X", price: 999, color: "Rose Gold" },
];

// for (const product of products) {
//   console.log(product);
// }

function matchedProduct(products) {
  const matched = [];
  for (const product of products) {
    if (product.price >= 700) {
      matched.push(product);
    }
  }
  return matched;
}

const result = matchedProduct(products);
console.log(result);
// function matchedProduct(products, search) {
//   const matched = [];
//   for (const product of products) {
//     if (product.color.toLowerCase().includes(search.toLowerCase())) {
//       matched.push(product);
//     }
//   }
//   return matched;
// }

// const result = matchedProduct(products, "blue");
// console.log(result);



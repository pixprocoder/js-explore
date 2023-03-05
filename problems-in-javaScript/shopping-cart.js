const products = [
  {
    name: "Apple iPhone 13 Pro",
    price: 999,
    quantity: 10,
  },
  {
    name: "Samsung Galaxy S21",
    price: 799,
    quantity: 15,
  },
  {
    name: "Google Pixel 6 Pro",
    price: 899,
    quantity: 8,
  },
  {
    name: "Sony WH-1000XM4 Wireless Headphones",
    price: 349,
    quantity: 20,
  },
  {
    name: "Nintendo Switch",
    price: 299,
    quantity: 5,
  },
  {
    name: "Bose SoundLink Revolve Bluetooth Speaker",
    price: 199,
    quantity: 12,
  },
];

function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productTotal = product.price * product.quantity;
    sum = sum + productTotal;
  }
  return sum;
}

const result = totalCost(products);
console.log("Your total cost is: ", result);

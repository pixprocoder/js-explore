const phones = [
  {
    name: "iPhone 13 Pro",
    price: 999,
    color: "Graphite",
    camera: "Triple 12MP",
    storage: "128GB",
  },
  {
    name: "Samsung Galaxy S21",
    price: 799,
    color: "Phantom Black",
    camera: "Triple 64MP",
    storage: "128GB",
  },
  {
    name: "Google Pixel 6 Pro",
    price: 899,
    color: "Stormy Black",
    camera: "50MP + 12MP",
    storage: "256GB",
  },
  {
    name: "OnePlus 10 Pro",
    price: 899,
    color: "Morning Mist",
    camera: "50MP + 16MP",
    storage: "256GB",
  },
  {
    name: "Xiaomi Mi 11",
    price: 749,
    color: "Midnight Gray",
    camera: "108MP + 13MP + 5MP",
    storage: "128GB",
  },
  {
    name: "Huawei P50 Pro",
    price: 1199,
    color: "Golden Black",
    camera: "50MP + 64MP + 13MP",
    storage: "512GB",
  },
  {
    name: "Sony Xperia 1 III",
    price: 1299,
    color: "Black",
    camera: "12MP + 12MP + 12MP",
    storage: "256GB",
  },
  {
    name: "LG Velvet 2 Pro",
    price: 799,
    color: "Aurora Silver",
    camera: "64MP + 16MP",
    storage: "128GB",
  },
  {
    name: "Motorola Edge 20 Pro",
    price: 899,
    color: "Midnight Blue",
    camera: "108MP + 16MP + 8MP",
    storage: "256GB",
  },
  {
    name: "Nokia X20",
    price: 499,
    color: "Midnight Sun",
    camera: "64MP + 5MP + 2MP + 2MP",
    storage: "128GB",
  },
];

function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    let phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}

const result = cheapestPhone(phones);
console.log(result);

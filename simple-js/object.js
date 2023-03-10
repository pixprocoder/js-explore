const products = {
  name: "phone",
  price: 2223,
  isRed: true,
  product: ["redmi", "sumsung", "iPhone", "nokia"],
  employee: {
    name: "rahim",
    id: 2,
    salary: 333,
  },
  myFunc: function (parameter) {
    return parameter * 3;
  },
};

const result = products.myFunc(3);
console.log(result);

const arr = products.product[0];
console.log(arr);
const employee = products.employee.salary;
console.log(employee);

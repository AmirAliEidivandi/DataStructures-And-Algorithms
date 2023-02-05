let num1 = 5;
let num2 = num1;

num1 = 20;
console.log(num1, num2); // 20 5

const obj1 = { value: 10 };
const obj2 = obj1;

obj1.value = 20;
console.log(obj1, obj2);

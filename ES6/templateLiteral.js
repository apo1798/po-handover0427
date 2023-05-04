

// 長字串如果用 backticks (`) 裡面的變數可以直接用 ${} 包起來

const price = 100;

console.log(`Apple`);
console.log(`Apple is ${price}
 dollars`);
console.log(`${1 === 1 ? '1 equals to 1' : "1 doesn't eqaul to 1"}`);

// Practice
// className is a string
// when `isShow` is true, className is 'block'. When `isShow` is false, className is 'hidden.'
let isShow;
// const className = `p-2 bg-blue-500 text-white ${isShow ? '': ''}`

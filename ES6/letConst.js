// ES6 之前宣告變數的方式是 var
// ES6 新增了 let, const 的宣告

// 1. 作用域差異
// var 是 function scope
var name = 'apo'

function sayHi() {
  var name = 'Jhon';
  console.log('Hello' + name);
}
sayHi()

var fruit = 'apple';

// 這裡的 var 會被外洩出去
if (true) {
  var fruit = 'pineapple';
}

for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i); // 5 個 6
  }, 1000);
}
console.log(fruit); // pineapple

// let, const 是 block scope
let drink = 'latte'
if (true) {
  let drink = 'coffee';
}

function drinkSayHi  () {
  let drink = 'juice'
  console.log(drink + 'hi!')
}

drinkSayHi()

console.log(drink)

for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i); // 1, 2, 3, 4, 5
  }, 1000);
}

// let, const 的 TDZ （Temporal Dead Zone)
// 在 var 宣告前讀取變數會是 undefined
// 但是在 let, const 宣告前讀取變數則會出現 error

console.log(transportation1); // undefined
var transportation1 = 'ubike';
console.log(transportation1); 

// console.log(transportation2); // Uncaught ReferenceError: Cannot access 'transportation2' before initialization

let transportation2 = 'bus';
// console.log(transportation2)

// 基本上都是用 const 宣告、let 用到的機會不多
// let fruit ='apple'
// fruit = 'pineapple'

// Primitive
const isCute = true
// isCute = false

const object = [1,2,3]
// object = []

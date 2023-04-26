// 一般的 function 寫法

function fn1() {
  return 'Hello function declaration';
}

const fn2 = function () {
  return 'Hello function expression';
};

// arrow function 就是把 `function` 拿掉
// () {} 之間加上 =>

const fn3 = () => {
  return 'Hello arrow function';
};

// 如果只有一個參數的話，掛號可以省略
// 沒有參數或多個參數的話，要加小掛號
// prettier-ignore
const logName = name => {
  console.log(name);
};

// 如果只有一行 expression 語句的話，可以省略大掛號，
// expression 的值會自動 return (implicit return)
const sumTwoNumbers1 = (num1, num2) => num1 + num2;
const sumTwoNumbers2 = (num1, num2) => {
  num1 + num2;
};
console.log(sumTwoNumbers1(1, 1), sumTwoNumbers2(1, 1)); // 2, undefined

// 箭頭函式沒有自己的 `this`, `this` 被綁定在定義他的物件
const logName1 = function () {
  console.log(this, 1); // 依據呼叫他的物件決定
  // console.log(this?.name);
};
const logName2 = () => {
  console.log(this, 2); // window, 'strict mode' 下是 undefined
  // console.log(this?.name);
};
const object = {
  name: 'apo',
  logName1,
  logName2,
};
// this 我還沒算很搞懂，有請huli大大
// https://blog.huli.tw/2019/02/23/javascript-what-is-this/#%E4%B8%8D%E5%90%88%E7%BE%A4%E7%9A%84%E7%AE%AD%E9%A0%AD%E5%87%BD%E5%BC%8F

// destructuring 解構賦值
// 很常用到、可以利用在「物件」、「陣列」

// 快速賦值
const [a, b] = [1, 2];
// 相當於是 const a = 1, b = 2;

let [c, , d, e] = [3, 4, 5];
// 相當於是 let c = 3, d = 5、跳過了 4
// e 則是 undefined

const { cash, points, unknown } = { cash: 200, points: 0 };
// 相當於是 const cash = 200, points = 0, unknown = undefined

let {
  skin: skinColor,
  body: { height: bodyHeight, weight: bodyWeight },
} = { skin: 'yellow', body: { height: 183, weight: 70 } };
// 相當於是 let skinColor = 'yellow', bodyHeight = 183, weight = 70

// 給予預設值
const [favColor1 = 'yollow', favColor2 = 'green'] = ['purple'];
// console.log(favColor1, favColor2); // purple green

const { lastName = 'Doe', firstName = 'John' } = { firstName: 'Po' };
// console.log(firstName, lastName); // Po Doe

// array 以順序對應，object 則是以 property name 對應

// 與函式搭配
function addTwoNumberInArray([num1, num2]) {
  return num1 + num2;
}
console.log(addTwoNumberInArray([400, 20])); // 420

function printName({ firstName, lastName }) {
  return firstName + ' ' + lastName;
}
console.log(printName({ firstName: 'Audi', lastName: 'Lu' })); // Audi Lu
// 如果函式有很多 property 時很好用，請見下方舉例
function printPersonDescription1(
  firstName,
  lastName,
  height,
  weight,
  favColor,
  favFruit
) {
  return `${firstName} ${lastName} is ${height}cm, ${weight} kg. Favorite color is ${favColor}, and favorite fruit is ${favFruit}`;
}
printPersonDescription1('apo', 'chen', 183, 70, 'blue', 'kiwi'); // 順序一定要對

function printPersonDescription2({
  firstName,
  lastName,
  height,
  weight,
  favColor,
  favFruit,
}) {
  return `${firstName} ${lastName} is ${height}cm, ${weight} kg. Favorite color is ${favColor}, and favorite fruit is ${favFruit}`;
}
printPersonDescription2({
  height: 183,
  lastName: 'chen',
  firstName: 'apo',
  favColor: 'green',
  favFruit: 'kiwi',
  weight: 70,
});
// 順序可以隨便調換

// Practice
const array = [['latte', 'is'], '^_^!!!!!', 100];
const object = {
  car: { price: 200, gas: true },
  bike: { price: 50, gas: false },
  scooter: { price: 100, gas: true },
  totol: 3,
};

// 1. const drink = 'latte', beV = 'is', price = 100
// 2. const carProperty = {price: 200, gas: true} , bikePrice = 50, foot = {price: 0, gas: false} (with default value)

// const  = array;
// const  = object;

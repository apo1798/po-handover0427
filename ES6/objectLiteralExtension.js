const height = 182;
const weight = 70;

// 1. 當物件的屬性與變數的名稱相同時，可以簡寫
const object1 = {
  height: height,
  weight: weight,
};

const object2 = {
  height,
  weight,
};

// object1, object2 兩個物件的內容都相同

// 2. 物件方法簡寫
const person1 = {
  sayHi() {
    return 'Hi! How are you?';
  },
};

const person2 = {
  sayHi: function () {
    return "Hi! How's your day?";
  },
};

// 如果物件的屬性是根據變數動態決定的話，可以用中掛號包起來
const myName = 'apo';

const person = {
  [myName + 'Height']: 182,
  [myName + 'Weight']: 72,
};
console.log(person);

// Practice
const apple = 'red';
const banana = 'yellow';
// create an object: {apple: 'red', banana: 'yellow'}
// method: printColor > return 'apple is red'
// create an object {'redFruit': 'apple'}

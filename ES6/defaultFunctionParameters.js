// 函數可以提供預設值

const add = (num, addNum = 1) => {
  return num + addNum;
};
console.log(add(400, 20), add(1)); // 420, 2

// reset
const sumExcludeFirstTwo = (num1, num2, ...rest) => {
  console.log(num1, num2); // 1, 2
  console.log(rest); // [3, 4, 5, 6, 7, 8, 9, 10] 以 array 的形式

  [3, 4, 5, 6, 7, 8, 9, 10].reduce((previous, current) => {
    // first time: previous  = 0, current: 3
    // second time: previous = 3, current: 4
    return previous+ current
  }, 0)

  return rest.reduce((pre, cur) => pre + cur, 0);
};
console.log(sumExcludeFirstTwo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Practice
// const concatAllLetters = ('I', 'like','pineapple', '!', '!')
// result : 'I like pineapple ! !'
const concatAllLetters = (...args) => {
  return args.join(' ');
};
console.log(concatAllLetters('I', 'like', 'pineapple', '!', '!'));

import memoize from 'lodash.memoize';

const echo = (anything) => {
  console.log(anything, '🔴');
  // AI 神奇，計算量龐大
  // p1 => p1'
  return anything;
};

const memoedEchoNum = memoize(echo);

echo(1);
echo(1);
echo(1);
echo(2);
echo(3);
echo(4);

console.log('✨✨✨✨✨');
// memo 比較參數之前有沒有傳過、傳過 > 調用紀錄。如果沒傳過，計算 > 把結果記起來

console.log(memoedEchoNum(1));
console.log(memoedEchoNum(1));
console.log(memoedEchoNum(2));
console.log(memoedEchoNum(3));
console.log(memoedEchoNum(1));
console.log(memoedEchoNum(1));
console.log(memoedEchoNum(3));

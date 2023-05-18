import { useEffect, useState } from 'react';

let functionRef;

const UseEffectWithFetch = () => {
  const [user, setUser] = useState(null);

  const habndleButtonClick = () => {
    setUser(Math.random());
  };

  // 跟上一次比較
  console.log(functionRef === habndleButtonClick, '✨');

  // 把這次的assign給他
  functionRef = habndleButtonClick;

  console.log('^_^');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?id=1')
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [setUser]);

  console.log(user);

  return (
    <div>
      {JSON.stringify(user)}
      <button onClick={habndleButtonClick}>BTN</button>
    </div>
  );
};
export default UseEffectWithFetch;

import { useEffect, useState } from 'react';
import UseEffectWithFetch from './UseEffectWithFetch';

const UseEffectPratice = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const [user, setUser] = useState([]);
  const [userId, setUserId] = useState(1);

  // 🟢
  // const userIds = user.map((user) => user.id);

  // 🔴
  // const [userIds, setUserIds] = useState([]);

  // useEffect(() => {
  //   setUserId(user.map((user) => user.id));
  // }, [user]);

  // p1 callback,👱‍♀️ return cleanup function
  // p2 depenendcy array (React 會去檢查， depenendcy array 裡面的值改變 =〉 執行前面的 function)

  // dependency array 如果是 [] => component mount 執行
  // array 裡面放跟 callback 有關聯的資料
  // 👱‍♀️ 沒有 p2 (沒有 dependency array) => 相當於沒加（執行順序還是在他後面）

  // useEffect 註冊 dom 事件, setTimeout
  console.log('in function body');

  // 呼叫 API endpoint
  useEffect(() => {
    let shouldDisabled = false;
    const getUser = async () => {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/users?id=' + userId
      );
      if (userId === 3) {
        await new Promise((r) => setTimeout(r, 10000));
      }
      const data = await res.json();
      console.log(data);
      if (shouldDisabled) return;

      // 更新 user 值
      setUser(data);
    };
    getUser();

    return () => {
      console.log('API cleanup');
      shouldDisabled = true;
    };
  }, [userId]);

  // DOM 事件
  useEffect(() => {
    if (document.querySelector('#hello') == null) return;
    // Component 渲染之後執行
    console.log('Callback');
    const registerClickEvent = () => {
      window.alert('Are you sure?');
    };
    document
      .querySelector('#hello')
      .addEventListener('click', registerClickEvent);

    // Component 移除的時候執行
    return () => {
      console.log('Clean up!');
      document
        .querySelector('#hello')
        .removeEventListener('click', registerClickEvent);
    };
  }, []);

  return (
    <div id='container' style={{ background: 'gold', padding: '2rem' }}>
      {user.map((user) => (
        <div style={{ color: 'black' }} key={user.id}>
          {user.name}
        </div>
      ))}
      <button
        onClick={() => {
          setUserId((state) => state + 1);
        }}
      >
        Click {userId}
      </button>
      {/* <button
        onClick={() => {
          setCount((state) => state + 1);
        }}
      >
        Click {count}
      </button>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      /> */}
      <UseEffectWithFetch />
    </div>
  );
};
export default UseEffectPratice;

// useEffect
// 1. COmponent mount 的時候執行某一個動作，只要執行一次
// 2. 當一個重要資料改變，其他的也要改變

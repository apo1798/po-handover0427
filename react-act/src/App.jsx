import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Counter from './components/Counter';
import Person from './components/Person';
import Input from './components/Input';

function App1() {
  const [count, setCount] = useState(0);
  const [isSenior, setIsSenior] = useState(false);
  // const isSenior = false

  const name1 = 'apo';
  const name2 = 'audi';

  const handleButtonClick = (e) => {
    const newValue = !isSenior;
    setIsSenior(newValue);

    setIsSenior((state) => {
      return state;
    });
  };

  const person = { name: 'Bob', age: 12, isCute: true };

  return (
    <>
      <Input />
      <input type='text' className='input' />
      {/* <h1>{isSenior ? name2 : name1}</h1>


      <Person info={person} nationality='tw' family={5} isHappy={true}>
        Hi Person Component!!^_^!!
      </Person>

      <button onClick={handleButtonClick}>Toggle</button>
      <div className='card'>
        <button
          onClick={() => {
            setCount(count + 1);
            setCount(count + 1);
            setCount(count + 1);
            setCount((count) => count + 1);
            setIsSenior(true);
          }}
        >
          count is {count}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <Counter></Counter> */}
    </>
  );
}

export default App1;

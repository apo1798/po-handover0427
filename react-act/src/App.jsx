import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Counter from './components/Counter';
import Person from './components/Person';
import Input from './components/Input';
import UseEffectPratice from './components/UseEffectPratice';
import MemoEntry from './components/memo/MemoEntry';

function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <>
      <MemoEntry />
      {/* Use Effect */}
      {/* <div style={{ background: 'purple', padding: '2rem' }} id='hello'></div>
      <button
        onClick={() => {
          setShowComponent((state) => !state);
        }}
      >
        Show or hide
      </button>
      {showComponent && <UseEffectPratice />} */}
      {/* <UseEffectPratice /> */}
      {/* Basic Practice */}
      {/* <Input /> */}
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

export default App;

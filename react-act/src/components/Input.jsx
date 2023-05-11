import styles from './Input.module.css';

import { useState } from 'react';
import { useRef } from 'react';
import { css } from '@emotion/css';
import styled from '@emotion/styled';

// css-in-js
const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const color = 'white';

console.log('Outer function');

const Input = () => {
  // 4. input 值 'a'
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);
  const divRef = useRef(); // { current: DOM 節點 }
  const inputRef = useRef(); // { current: InputElement }

  const [form, setForm] = useState({
    name: 'audi',
    isHappy: true,
  });

  console.log(form);

  return (
    <form>
      <input
        name='name'
        value={form.name}
        onChange={(e) => {
          // {...form}
          // setForm({ ...form, name: e.target.value });

          setForm((state) => ({ ...state, name: e.target.value }));
          setForm((state) => ({ ...state, [e.target.name]: e.target.value }));
        }}
        className={styles.input}
      />
      <label>
        <input
          type='checkbox'
          checked={form.isHappy}
          onChange={(e) => {
            setForm((state) => ({ ...state, isHappy: e.target.checked }));
          }}
          className='bg-orange-400'
        />
        isHappy
      </label>
      <div
        className={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
      <Button></Button>
    </form>
  );

  // return (
  //   <form
  //     ref={divRef}
  //     // onSubmit={(e) => {
  //     //   // prevent refreshing page
  //     //   e.preventDefault();
  //     // }}
  //   >
  //     <h1>Controlled input </h1>
  //     <input
  //       // 5. input === 'a' 帶入
  //       value={input} // 'a' 畫面 input box  顯示 'a'
  //       onChange={(e) => {
  //         // 1. 觸發 onChange
  //         // 2. 用 setInput 告訴 React 值要更新 => Object.is(old, new)
  //         // 3. 如果值不同， input 更新， function 新的 input 再跑一次 function
  //         console.log('onChange');
  //         setInput((input) => {
  //           console.log(input, 'old input');
  //           return e.target.value;
  //         });
  //       }}
  //     />
  //     {/* //5. input === 'a' 帶入 */}
  //     <p>Input: {input}</p>
  //     <p>Count: {count}</p>
  //     <h2>Uncontrolled Input</h2>
  //     <input ref={inputRef} defaultValue={'^_^'} />
  //     <button
  //       onClick={() => {
  //         console.log(input);
  //         console.log(inputRef.current.value);
  //       }}
  //       type='button'
  //     >
  //       Submit
  //     </button>
  //   </form>
  // );
};
export default Input;

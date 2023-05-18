// 記住一個 Component, memo(COMPONENT)

import { memo } from 'react';

// const MemoComponent = () => {
//   console.log('Memo Component is rendering...');
//   return <div>MemoComponent</div>;
// };

// 注意物件的 reference
// 把 primitive value 拆出來
const MemoComponent = memo(({ color, changeStyleHandler }) => {
  console.log('Memo Component is rendering... 🐥');
  return (
    <div style={{ color: color, height: '2rem', width: '2rem' }}>
      MemoComponent
      <button
        onClick={() => {
          changeStyleHandler('white');
        }}
      >
        WHITE
      </button>
    </div>
  );
});

MemoComponent.displayName = 'MemoComponent';

export default MemoComponent;

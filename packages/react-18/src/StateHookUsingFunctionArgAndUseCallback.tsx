import React, { useCallback, useState } from 'react';
import { MemoizedChildComponent, THRESHOLD } from './common';

export default function () {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((count) => count + 1), []);
  const decrement = useCallback(() => setCount((count) => count - 1), []);
  console.log('render container', count);
  return (
    <div className="example__container">
      <div className="example__label">
        <div>{count}</div>
        <h3>best solution</h3>
        <div>
          memoized function that does not require self state as dependency,
          because setter uses callback as an argument instead of fixed value
        </div>
      </div>
      <MemoizedChildComponent
        isBelowThreshold={count < THRESHOLD}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
}

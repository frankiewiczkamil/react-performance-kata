import React, { useState } from 'react';
import { MemoizedChildComponent, THRESHOLD } from './common';

export default function () {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1); // <- creates new reference on every run (!)
  const decrement = () => setCount(count - 1); // <- creates new reference on every run (!)
  console.log('render container', count);
  return (
    <div className="example__container">
      <div className="example__label">
        <div>{count}</div>
        <div>plain useState - the problem</div>
        <div>
          callback functions for increment/decrement get new value and new
          REFERENCE on each run
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

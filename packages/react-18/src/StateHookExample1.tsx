import React, { useState } from 'react';
import { MemoizedChildComponent, THRESHOLD } from './common';

// function impl changes
let currentIncrementCallback = () => {};
let currentDecrementCallback = () => {};

// wrappers (references) below do not change
const incrementRef = () => currentIncrementCallback();
const decrementRef = () => currentDecrementCallback();

export default function () {
  console.log('render container');
  const [count, setCount] = useState(0);
  currentIncrementCallback = () => setCount(count + 1);
  currentDecrementCallback = () => setCount(count - 1);

  return (
    <div className="example__container">
      <div className="example__label">
        <div>{count}</div>
        <div>external wrappers with static references</div>
      </div>
      <MemoizedChildComponent
        isBelowThreshold={count < THRESHOLD}
        increment={incrementRef}
        decrement={decrementRef}
      />
    </div>
  );
}

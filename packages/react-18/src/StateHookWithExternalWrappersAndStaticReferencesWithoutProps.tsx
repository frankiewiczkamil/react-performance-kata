import React, { memo, useState } from 'react';
import { THRESHOLD } from './common';

// function impl changes
let currentIncrementCallback = () => {};
let currentDecrementCallback = () => {};

// wrappers (references) below do not change
const incrementRef = () => currentIncrementCallback();
const decrementRef = () => currentDecrementCallback();

export default function () {
  const [count, setCount] = useState(0);
  currentIncrementCallback = () => setCount(count + 1);
  currentDecrementCallback = () => setCount(count - 1);

  console.log('render container', count);
  return (
    <div className="example__container">
      <div className="example__label">
        <div>{count}</div>
        <div>external wrappers with static references</div>
        <div>accessed directly instead of passing props</div>
      </div>
      <MemoizedComponent isBelowThreshold={count < THRESHOLD} />
    </div>
  );
}

function SlowComponent(props: { isBelowThreshold: boolean }) {
  console.log('render component');
  return (
    <div className="example__button">
      <p>
        {props.isBelowThreshold ? 'below' : 'above'}
        &nbsp;
        {THRESHOLD}
      </p>
      <button onClick={incrementRef}>increment</button>
      <button onClick={decrementRef}>decrement</button>
    </div>
  );
}

const MemoizedComponent = memo(SlowComponent);

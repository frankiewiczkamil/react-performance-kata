import { memo, useState } from 'react';
import { THRESHOLD } from './common';

let currentIncrementCallback = () => {};
let currentDecrementCallback = () => {};

// this reference does not change
const incrementRef = () => currentIncrementCallback();
const decrementRef = () => currentDecrementCallback();

export default function () {
  console.log('render container');
  const [count, setCount] = useState(0);
  currentIncrementCallback = () => setCount(count + 1);
  return <MemoizedComponent isBelowThreshold={count < THRESHOLD} />;
}

function SlowComponent(props: { isBelowThreshold: boolean }) {
  console.log('render component', props.isBelowThreshold);
  return (
    <div className="example__container">
      <div className="example__label">
        <div>useState - workaround 2: </div>
        <div>external wrappers with static references</div>
        <div>accessed directly instead of passing props</div>
      </div>
      <div className="example__button">
        <p>
          {props.isBelowThreshold ? 'below' : 'above'}
          &nbsp;
          {THRESHOLD}
        </p>
        <button onClick={incrementRef}>increment</button>
        <button onClick={decrementRef}>decrement</button>
      </div>
    </div>
  );
}

const MemoizedComponent = memo(SlowComponent);

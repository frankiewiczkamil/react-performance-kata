import React, { useCallback, useRef, useState } from 'react';
import { MemoizedChildComponent, THRESHOLD } from './common';

type Callback = (...args: unknown[]) => unknown;
type UseCommand = (callback: Callback) => Callback;
const useCommand: UseCommand = (callback) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;
  return useCallback((...args) => callbackRef.current(...args), []);
};

export default function () {
  const [count, setCount] = useState(0);
  const increment = useCommand(() => setCount(count + 1));
  const decrement = useCommand(() => setCount(count - 1));
  console.log('render container', count);
  return (
    <div className="example__container">
      <div className="example__label">
        <div>{count}</div>
        <div>
          useCallback + useRef containing a reference to a current callback
        </div>
        <div>extracted to a custom hook</div>
      </div>
      <MemoizedChildComponent
        isBelowThreshold={count < THRESHOLD}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
}

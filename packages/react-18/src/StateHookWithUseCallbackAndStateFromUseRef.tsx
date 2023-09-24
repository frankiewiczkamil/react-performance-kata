import React, { useCallback, useRef, useState } from 'react';
import { MemoizedChildComponent, THRESHOLD } from './common';

export default function () {
  const [count, setCount] = useState(0);
  const stateRef = useRef(count);
  stateRef.current = count; // it needs to be assigned here, outside useCallback in case sth else changes state (consistency!)
  const increment = useCallback(function _increase() {
    setCount(++stateRef.current);
  }, []);
  const decrement = useCallback(function _increase() {
    setCount(++stateRef.current);
  }, []);
  console.log('render container', count);
  return (
    <div className="example__container">
      <div className="example__label">
        <div>{count}</div>
        <div>
          useState fixed with useCallback + useRef providing current state
        </div>
        <div>state is obtained from useRef's current</div>
      </div>
      <MemoizedChildComponent
        isBelowThreshold={count < THRESHOLD}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
}

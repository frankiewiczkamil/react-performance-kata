import React, { useCallback, useReducer } from 'react';
import { MemoizedChildComponent, THRESHOLD } from './common';

const initialState = 0;
const reducer = (
  state: number,
  action: { type: 'INCREMENT' } | { type: 'DECREMENT' }
) => state + (action.type === 'INCREMENT' ? 1 : -1);

export default function () {
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log('render container', count);
  const increment = useCallback(() => dispatch({ type: 'INCREMENT' }), []);
  const decrement = useCallback(() => dispatch({ type: 'DECREMENT' }), []);
  return (
    <div className="example__container">
      <div className="example__label">
        <div>{count}</div>
        <h4>good solution</h4>
        <div>useReducer + useCallback</div>
        <div>
          created memoized functions using reducer's dispatch (just like in
          redux)
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

import { useCallback, useState } from 'react';
import { MemoizedChildComponent, THRESHOLD } from './common';

function createFunctions(initialCount: number, setCount: Function) {
  let _count = initialCount; // closure
  return {
    increment: () => {
      _count++;
      console.log('increase', _count);
      setCount(_count);
    },
    decrement: () => {
      _count--;
      console.log('increase', _count);
      setCount(_count);
    },
  };
}

export default function () {
  const [count, setCount] = useState(0);
  const functions = createFunctions(count, setCount);
  const increment = useCallback(functions.increment, []);
  const decrement = useCallback(functions.decrement, []);
  console.log('render container', count);
  return (
    <div className="example__container">
      <div className="example__label">
        <div>{count}</div>
        <div>useCallback + function closure</div>
        <div>
          state is passed to the factory function where it is copied so it can
          be used via lexical scope by the increase function
        </div>
        <div>
          it requires it to be the only one place where state is changed
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

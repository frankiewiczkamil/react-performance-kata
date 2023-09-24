import { useState, memo, MouseEventHandler, useCallback, useRef } from 'react';

export default function () {
  const [count, setCount] = useState(0);
  const stateRef = useRef(count);
  stateRef.current = count; // it needs to be assigned here, outside useCallback in case sth else changes state (consistency!)
  const increase = useCallback(function _increase() {
    setCount(++stateRef.current);
  }, []);
  console.log('render container', count);
  const isUnder10 = count < 10;
  return <MemoizedComponent isUnder10={isUnder10} increase={increase} />;
}

function SlowComponent(props: {
  isUnder10: boolean;
  increase: MouseEventHandler;
}) {
  console.log('render component');
  return (
    <div className="example__container">
      <div className="example__label">
        <div>
          useState fixed with useCallback + useRef providing current state
        </div>
        <div>state is obtained from useRef's current </div>
      </div>
      <div className="example__button">
        {props.isUnder10 ? <p>under 10 </p> : <p>above 10 </p>}
        <button onClick={props.increase}>increment</button>
      </div>
    </div>
  );
}

const MemoizedComponent = memo(SlowComponent);

import { memo, MouseEventHandler } from 'react';

export const THRESHOLD = 5;
function SlowComponent(props: {
  isBelowThreshold: boolean;
  increment: MouseEventHandler;
  decrement: MouseEventHandler;
}) {
  console.log('render component');
  return (
    <div className="example__button">
      <p>
        {props.isBelowThreshold ? 'below' : 'above'}
        &nbsp;
        {THRESHOLD}
      </p>
      <button onClick={props.increment}>increment</button>
      <button onClick={props.decrement}>decrement</button>
    </div>
  );
}

export const MemoizedChildComponent = memo(SlowComponent);

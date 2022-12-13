import { useState, memo, useCallback, useRef } from "react";

type Callback = (...args: unknown[]) => unknown;
type UseCommand = (callback: Callback) => Callback;
const useCommand: UseCommand = (callback) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;
  return useCallback((...args) => callbackRef.current(...args), []);
};


export default function () {
  console.log("render container");
  const [count, setCount] = useState(0);
  const isUnder10 = count < 10
  const increase = useCommand(() => setCount(count + 1));
  return <MemoizedComponent isUnder10={isUnder10} increase={increase} />;
}

function SlowComponent({ isUnder10, increase }: { isUnder10: boolean, increase: () => void }) {
  console.log("render component", isUnder10);
  return (
    <div className="example__container">
      <div className="example__label">
        <div>useState + custom hook (useRef+useCallback) </div>
        <div>it mimics class component methods</div>
      </div>
      <div className="example__button">
        {isUnder10 ? <p>under 10 </p> : <p>above 10 </p>}
        <button onClick={increase}>increment</button>
      </div>
    </div>
  );
}

const MemoizedComponent = memo(SlowComponent);

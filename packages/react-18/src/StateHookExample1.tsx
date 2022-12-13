import { useState, memo, MouseEventHandler } from "react";

let currentIncreaseCallback = () => {
};

// this reference does not change
const increaseRef = () => currentIncreaseCallback();

export default function () {
  console.log("render container");
  const [count, setCount] = useState(0);
  currentIncreaseCallback = () => setCount(count + 1);
  const isUnder10 = count < 10;
  return <MemoizedComponent isUnder10={isUnder10} increase={increaseRef} />;
}

function SlowComponent(props: { isUnder10: boolean; increase: MouseEventHandler<HTMLButtonElement>; }) {
  console.log("render component", props.isUnder10);
  return (
    <div className="example__container">
      <div className="example__label">
        <div>useState - workaround 1: </div>
        <div>handler function is a ref to a function that changes under the hood</div>
        <div>accessed though props</div>
      </div>
      <div className="example__button">
        {props.isUnder10 ? <p>under 10 </p> : <p>above 10 </p>}
        <button onClick={props.increase}>increment</button>
      </div>

    </div>
  );
}

const MemoizedComponent = memo(SlowComponent);

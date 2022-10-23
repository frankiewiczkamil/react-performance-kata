import {useState, memo, MouseEventHandler} from "react";

let currentIncreaseCallback = () => {
};

// thise reference does not change
const increaseRef = () => currentIncreaseCallback();

export default function () {
  console.log("render container");
  const [count, setCount] = useState(0);
  currentIncreaseCallback = () => setCount(count + 1);
  const isUnder10 = count < 10;
  return <MemoizedComponent isUnder10={isUnder10} increase={increaseRef}/>;
}

function SlowComponent(props: { isUnder10: boolean; increase: MouseEventHandler<HTMLButtonElement>; }) {
  console.log("render component", props.isUnder10);
  return (
    <div>
      {props.isUnder10 ? <p>under 10 </p> : <p>above 10 </p>}
      <button onClick={props.increase}>Click me</button>
    </div>
  );
}

const MemoizedComponent = memo(SlowComponent);

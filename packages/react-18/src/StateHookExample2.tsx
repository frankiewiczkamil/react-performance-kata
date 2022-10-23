import {useState, memo} from "react";

let currentIncreaseCallback = () => {
};

// this reference does not change
const increaseRef = () => currentIncreaseCallback();

export default function () {
  console.log("render container");
  const [count, setCount] = useState(0);
  currentIncreaseCallback = () => setCount(count + 1);
  const isUnder10 = count < 10;
  return <MemoizedComponent isUnder10={isUnder10}/>;
}

function SlowComponent(props: { isUnder10: boolean }) {
  console.log("render component", props.isUnder10);
  return (
    <div>
      {props.isUnder10 ? <p>under 10 </p> : <p>above 10 </p>}
      <button onClick={increaseRef}>Click me</button>
    </div>
  );
}

const MemoizedComponent = memo(SlowComponent);

import { useState, memo, MouseEventHandler } from "react";

export default function () {
  console.log("render container");
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1); // <- create new instance on every run (!)
  const isUnder10 = count < 10;
  return <MemoizedComponent isUnder10={isUnder10} increase={increase} />;
}

function SlowComponent(props: { isUnder10: boolean; increase: MouseEventHandler<HTMLButtonElement>; }) {
  console.log("render child component", props.isUnder10);
  return (
    <div className="example__container">
      <div className="example__label">
        <div>useState - the problem</div>
        <div>handler function is re-initialized on each run and passed as a prop</div>
      </div>
      <div className="example__button">
        {props.isUnder10 ? <div >under 10 </div> : <div>above 10 </div>}
        <button onClick={props.increase}>increment</button>
      </div>

    </div>
  );
}

const MemoizedComponent = memo(SlowComponent);

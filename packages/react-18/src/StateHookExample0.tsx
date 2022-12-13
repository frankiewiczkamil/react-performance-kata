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
    <div style={{ display: "inline-block", padding: '1rem' }}>
      <div>useState</div>
      <div>handler function is re-initialized on each run and passed as a prop</div>
      {props.isUnder10 ? <p>under 10 </p> : <p>above 10 </p>}
      <button onClick={props.increase}>Click me</button>
    </div>
  );
}

const MemoizedComponent = memo(SlowComponent);

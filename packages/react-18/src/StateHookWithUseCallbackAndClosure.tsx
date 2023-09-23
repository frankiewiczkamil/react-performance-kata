import {useState, memo, MouseEventHandler, useCallback} from "react";

function createIncrease( initialCount: number, setCount: Function){
  let _count = initialCount; // closure
  return () => {
    _count++;
    console.log("increase", _count);
    setCount(_count);
  }
}
export default function () {
  const [count, setCount] = useState(0);
  const increase = useCallback(createIncrease(count, setCount), []);
  console.log("render container");
  const isUnder10 = count < 10;
  return <MemoizedComponent isUnder10={isUnder10} increase={increase} />;
}

function SlowComponent(props: { isUnder10: boolean; increase: MouseEventHandler }) {
  console.log("render component");
  return (
    <div className="example__container">
      <div className="example__label">
        <div>useState fixed with useCallback + function closure, accessed through props</div>
        <div>problematic state is passed to the factory function where it is copied so it can be used via lexical scope by the increase function</div>
        <div>it requires it to be the only one place where state is changed</div>
      </div>
      <div className="example__button">
        {props.isUnder10 ? <p>under 10 </p> : <p>above 10 </p>}
        <button onClick={props.increase}>increment</button>
      </div>

    </div>
  );
}

const MemoizedComponent = memo(SlowComponent);

import { useReducer, memo, MouseEventHandler } from "react";

const initialState = 0;
const reducer = (state: number, _action: any) => state + 1;

export default function () {
    const [count, dispatch] = useReducer(reducer, initialState);
    console.log("render container", count);
    const under10 = count < 10;
    return <MemoizedApp under10={under10} increase={dispatch} />;
}

function SlowComponent(props: { under10: boolean; increase: MouseEventHandler<HTMLButtonElement> | undefined; }) {
    console.log("render component", props.under10);
    return (
        <div className="example__container">
            <div className="example__label">
                <div>useReducer</div>
                <div>using dispatch function just like in redux</div>
            </div>
            <div className="example__button">
                {props.under10 ? <p>under 10 </p> : <p>above 10 </p>}
                <button onClick={props.increase}>increment</button>
            </div>
        </div>
    );
}

const MemoizedApp = memo(SlowComponent);

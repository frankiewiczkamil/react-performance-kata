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
        <div>
            {props.under10 ? <p>under 10 </p> : <p>above 10 </p>}
            <button onClick={props.increase}>Click me</button>
        </div>
    );
}

const MemoizedApp = memo(SlowComponent);

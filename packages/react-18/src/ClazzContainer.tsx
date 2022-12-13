import React, { memo, MouseEventHandler } from "react";

type State = { count: number };
type Props = {};
export class ClazzContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { count: 0 };
        this.increase = this.increase.bind(this);
    }
    increase() {
        this.setState({
            count: this.state.count + 1
        });
    }
    override render() {
        console.log("render container", this.state.count);
        const under10 = this.state.count < 10;
        return <MemoizedApp under10={under10} increase={this.increase} />;
    }

}

function SlowComponent(props: { under10: boolean; increase: MouseEventHandler<HTMLButtonElement> | undefined; }) {
    console.log("render component", props.under10);
    return (
        <div className="example__container">
            <div className="example__label">
                <div>class container component</div>
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

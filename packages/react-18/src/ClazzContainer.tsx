import React from 'react';
import { MemoizedChildComponent, THRESHOLD } from './common';

type State = { count: number };
type Props = {};
export class ClazzContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  override render() {
    console.log('render container', this.state.count);
    const isBelowThreshold = this.state.count < THRESHOLD;
    return (
      <div className="example__container">
        <div className="example__label">
          <div>{this.state.count}</div>
          <div>class-based container component</div>
          <div>
            callback reference is const as methods' reference does not change
          </div>
        </div>
        <MemoizedChildComponent
          isBelowThreshold={isBelowThreshold}
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
    );
  }
}

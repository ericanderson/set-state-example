import * as React from "react";
import * as ReactDOM from "react-dom";

/* tslint:disable:max-classes-per-file*/

interface BaseProps {
  baseProp: string;
}

interface BaseState {
  baseState: string;
}

class Base<TProps extends BaseProps, TState extends BaseState> extends React.Component<TProps, TState> {
  public componentWillMount() {
    this.setState({
      baseState: this.props.baseProp,
    });
  }

  public render() {
    return (
      <p>
        <code>this.state.baseState: </code>
        {this.state.baseState}
      </p>
    );
  }
}

interface DerivedProps extends BaseProps {
  derivedProp: string;
}

interface DerivedState extends BaseState {
  derivedState: string;
}

export class Derived extends Base<DerivedProps, DerivedState> {
  public componentWillMount() {
    super.componentWillMount();
    this.setState({
      derivedState: this.props.derivedProp,
    });
  }

  public render() {
    return (
      <div>
        <p>
          <code>this.state.derivedState: </code>
          {this.state.derivedState}
        </p>
        {super.render()}
      </div>
    );
  }
}

ReactDOM.render(<Derived derivedProp="its derived" baseProp="its basic" />, document.getElementById("main"));

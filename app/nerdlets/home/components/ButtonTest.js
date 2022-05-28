import React from "react";
import { Button } from "nr1";

export default class ButtonTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.state.counter++;
    console.log(`Counter: ${this.state.counter}`);
    this.setState({ counter: this.state.counter });
  }

  render() {
    return (
      <div className="nr1-Docs-prettify">
        <p>Counter: {this.state.counter}</p>
        <Button type={Button.TYPE.TERTIARY} onClick={this.increment}>
          Click me
        </Button>
      </div>
    );
  }
}

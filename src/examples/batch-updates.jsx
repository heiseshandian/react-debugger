import { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 1,
    };
  }

  handleOnClick = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });

      this.setState({
        count: this.state.count + 1,
      });
    });
  };

  render() {
    console.log("render");
    return <div onClick={this.handleOnClick}>{this.state.count}</div>;
  }
}

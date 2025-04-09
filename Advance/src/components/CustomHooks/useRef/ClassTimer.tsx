import React, { Component } from "react";

export class ClassTimer extends Component {
  interval: number | null = null;
  constructor(props: any) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  componentDidMount(): void {
      this.interval = setInterval(() => {
        this.setState(prevState => ({timer: prevState.timer + 1}))
      }, 1000)
  }

  componentWillUnmount(): void {
      if (this.interval !== null) {
        clearInterval(this.interval);
        this.interval = null;
      }
  }

  render() {
    return (
        <div>
        ClassTimer - {this.state.timer}
        <button onClick={() => clearInterval(this.interval)}>Clear Time</button>
        </div>
    )
  }
}

export default ClassTimer;

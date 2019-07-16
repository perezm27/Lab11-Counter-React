import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>

      <Counter />
    </div>
  );
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    let val = this.state.count;
    val += 1;
    this.setState({
      count: val
    });
  };

  decrement = () => {
    let val = this.state.count;

    if (val > 0) {
      val -= 1;
      this.setState({
        count: val
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <p>{this.state.count}</p>
        <button onClick={this.increment}> + </button>
        <button onClick={this.decrement}> - </button>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

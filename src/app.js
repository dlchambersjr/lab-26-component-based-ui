import React from "react";
import { connect } from "react-redux";

import Header from "./header";
import Footer from "./footer";

import "./app.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      counterClass: "positive"
    };
  }

  handleButtonClick(value, e) {
    e.preventDefault();
    let counter = this.state.counter + value;
    let counterClass = counter > 0 ? "positive" : "negative";
    this.setState({ counter, counterClass });
  }

  render() {
    return (
      <div>
        <a href="" onClick={this.handleButtonClick.bind(this, 1)}>
          +
        </a>
        <h4 className={this.state.counterClass}>{this.state.counter}</h4>
        <a href="" onClick={this.handleButtonClick.bind(this, -1)}>
          -
        </a>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

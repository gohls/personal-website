import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./index.css";

export default class MyProfileBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeOfDay: "day"
    };
  }

  // Change greeting per timeOfDay 
  componentDidMount() {
    const currentHour = new Date().getHours()
    if (currentHour < 12) {
      this.setState({ timeOfDay: "morning" })
    } else if (currentHour < 18) {
      this.setState({ timeOfDay: "afternoon" })
    } else {
      this.setState({ timeOfDay: "evening" })
    }
  }

  render() {
    return (
      <Jumbotron className={this.state.timeOfDay}>
        <h1 className="welome-msg-header">Good {this.state.timeOfDay}, I'm Simon.</h1>
        <div className="welome-msg-sub">
          I'm a senior computer science student at St.
          Edward's University.
          </div>
        <br />
        {/* <br />
        <h3>
          "If you give someone a program, you will frustrate them for a day; <br />
          if you teach them how to program, you will frustrate them for a lifetime."
          </h3> */}
        <h2>
          <span className="quote">“If you give someone a program, you will frustrate them for a day;</span><br />
          <span className="quote">if you teach them how to program, you will frustrate them for a lifetime.”</span><br />
          {/* <span className="quote"></span><br /> */}
          <span className="quote">― ROEDY GREEN, <i classname="author-title">Programmer</i></span><br />
        </h2>
      </Jumbotron>
    );
  }
}

import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./index.css";

export default class MyProfileBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeOfDay: "day",
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
      <Jumbotron className="banner">
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
        <span>
          <a href="https://www.linkedin.com/in/sagohl/" target="_blank" className="fab fa-linkedin fa-3x" />
          <a href="https://bitbucket.org/sgohl/" target="_blank" className="fab fa-bitbucket fa-3x" />
          <a href="https://www.hackerrank.com/sgohl" target="_blank" className="fab fa-hackerrank fa-3x" />
          <a href="mailto:sgohl@stedwards.edu" target="_blank" className="fas fa-envelope fa-3x" />
        </span>
      </Jumbotron>
    );
  }
}

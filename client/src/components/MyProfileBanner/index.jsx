import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
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
        <h3 className="welome-msg-header">Good {this.state.timeOfDay}, I'm Simon.</h3>
        <div className="welome-msg-sub">
          I'm a senior computer science student at St.
          Edward's University.
          </div>
        <br />
        <span>
          <a class="fab fa-bitbucket fa-3x"></a>
          <a class="fab fa-linkedin fa-3x"> </a>
          <a class="fab fa-hackerrank fa-3x"></a>
          <a class="fas fa-envelope fa-3x"></a>
        </span>
      </Jumbotron>
    );
  }
}

import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
// import Particles from "react-particles-js";
import "./index.css";

class MyProfileBanner extends React.Component {
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
      <Jumbotron className="banner" id="particles-js">
        {/* <Particles canvasClassName="example"
          height="220px"
          width="500px"
          align-content="right"
        /> */}
        <h3 className="welome-msg-header">Good {this.state.timeOfDay}, I'm Simon!</h3>
        <div className="welome-msg-sub">
          I'm a senior computer science student at St.
          Edward's University.
          </div>
        <br />
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    );
  }
}

export default MyProfileBanner;
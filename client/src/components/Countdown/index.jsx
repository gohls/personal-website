import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./index.css";

class MyCountdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Graduation countdown data
      countdown: 'May 9, 2020 10:00',
      // Values to display
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      // Message to display when countdown hits
      message: '',
    };
  }

  getCountdown(graduation) {
    const time = Date.parse(graduation) - Date.parse(new Date());
    if (time <= 0) {
      this.setState({
        message: 'I Graduated!!!!!!!!',
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }

  componentDidMount() {
    setInterval(() => this.getCountdown(this.state.countdown), 1000);
  }

  render() {
    return (
      <Jumbotron className="countdown-banner">
        <div>
          {this.state.message ? this.state.message :
            <Container>
              <Row>
                <Col> <div className="grad-center"> May 9, 2020 </div></Col>
                <Col className="time">
                  <ul>
                    <li><span className="timetest">{this.state.days}</span>Days</li>
                    <li><span className="timetest">{this.state.hours}</span>Hours</li>
                    <li><span className="timetest">{this.state.minutes}</span>Minutes</li>
                    <li><span className="timetest">{this.state.seconds}</span>Seconds</li>
                  </ul>

                </Col>
              </Row>
            </Container>
          }
        </div>
      </Jumbotron>
    );
  }
}

export default MyCountdown;
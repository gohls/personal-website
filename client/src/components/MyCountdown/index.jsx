import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron"
import "./index.css";

class MyCountdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Graduation countdown data
      countdown: 'May, 4, 2020',
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
          <h3 className="banner-text"> Graduation Countdown: </h3>
          {this.state.message ? this.state.message :
            <div>
              <ul>
                <li><span className="timetest">{this.state.days}</span>Days</li>
                <li><span className="timetest">{this.state.hours}</span>Hours</li>
                <li><span className="timetest">{this.state.minutes}</span>Minutes</li>
                <li><span className="timetest">{this.state.seconds}</span>Seconds</li>
              </ul>
            </div>
          }
        </div>
      </Jumbotron>
    );
  }
}

export default MyCountdown;


// <span className="time">
//                 <div className="time-titles">Days:</div>{this.state.days} 
//                 <div className="time-titles">Hours:</div>{this.state.hours} 
//                 <div className="time-titles">Minutes:</div>{this.state.minutes} 
//                 <div className="time-titles">Seconds:</div>{this.state.seconds} 
//               </span>
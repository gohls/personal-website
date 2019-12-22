import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./index.css";

class MyEducation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Graduation countdown data
      countdown: 'May 9, 2020',
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
      <Jumbotron className="education-jumbo">
        <div>
          {this.state.message ? this.state.message :
            <Container>
              <Row>
                <Col>
                  <table >
                    <tr>
                      <td className="edu-field"><h3>School</h3></td>
                      <td><b>Name:</b> St. Edward's University <br />
                        <b>Degree:</b> Bachelor of Science - BS <br />
                        <b>Field of Study:</b> Computer Science <br />
                        <b>GPA:</b> 3.35 <br /></td>
                    </tr>
                    <tr>
                      <td className="edu-field"><h3>Lang's</h3></td>
                      <td> Java
                      • Python
                      • Bash
                      • React
                      • Node
                      • JavaScript
                      • MongoDB
                      • MySQL</td>
                    </tr>
                    <tr>
                      <td className="edu-field"><h3>Tools</h3></td>
                      <td>
                        Docker
                        • GDB
                        • Trello
                        • Vim
                        • VirtualBox
                        • VS Code
                        • Wireshark
                      </td>
                    </tr>
                    <tr>
                      <td className="edu-field"><h3>Skills</h3></td>
                      <td>
                        Java
                        • Python
                        • React
                        • Node
                        • JavaScript
                        • MongoDB
                        • MySQL
                      </td>
                    </tr>
                  </table>
                </Col>
                <Col>
                  <table >
                    <tr>
                      <td className="edu-field"><h3>Courses</h3></td>
                      <td>
                        Algorithms & Data Structures
                        • Component-Based Programming
                        • Computer Security & Privacy
                        • Computing Sciences Concepts I/II + Lab
                        • Database Theory
                        • Intro Computer Organization & Architecture
                        • Operating Systems
                        • Program Languages
                        • Senior Research Project
                        • Software Engineering Ⅰ/II + Research
                        • Web Programming
                      </td>
                    </tr>
                    <tr>
                      <td className="edu-field"><h3>Cert's</h3></td>
                      <td>
                        eJPT - eLearnSecurity Junior Penetration Tester
                      </td>
                    </tr>
                    <tr>
                      <td className="edu-field"><h3>Other</h3></td>
                      <td>
                        Scrum
                        • Python
                        • React
                        • Node
                        • JavaScript
                        • MongoDB
                        • MySQL
                      </td>
                    </tr>
                  </table>
                </Col>
              </Row>
              {/* <Col>



                <h3>Languages</h3>
                
                  <h3>Tools</h3>
                
                </Col>
              <Col>
                <h3>Courses</h3>
                
                  <h3>Certificates</h3>
                

                </Col>
              </Row> */}
            </Container>
          }
        </div>
      </Jumbotron>
    );
  }
}

export default MyEducation;
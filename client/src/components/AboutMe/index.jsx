import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { withGetScreen } from 'react-getscreen'
import "./index.css"

// TODO: 
// Address DRY
// Center image

class MyAboutMe extends React.Component {

  render() {
    if (!this.props.isMobile()) {
      return (
        <Jumbotron className="education-jumbo">
          <div>
            <Container>
              <Row>
                <Col sm={3} className="img-col">
                  <center>
                    <img className="profile-img" src="/images/me2.jpg" alt="Avatar" width="275" height="275" />
                  </center>
                </Col>
                <Col>
                  <table >
                    <tr>
                      <td className="edu-field"><h3>About</h3></td>
                      <td>
                        I was born in Texas, raised in Germany and grew up in California.
                        Now I've gone full circle and am back at my birthplace studying Computer
                        Science at St. Edward's University in Austin, Texas.
                      <br />
                        <br />
                        I've been in Austin for 4 years but only began going back to school
                        about 2 years ago. Before that, I had completed some college and was
                        working as a social worker. After 5 fulfilling but challenging years
                        in that field, I decided it was time for a change. I made the difficult
                        and risky choice to go back to school full time in a field I had long had
                        interest in - Computer Science.
                      <br />
                        <br />
                        Now, I am focusing my efforts on doing all things Computer Science
                        including software development projects, participation in hackathons
                        and capture the flag challenges (CTF), and attending coding and
                        cybersecurity events. When I'm not studying or doing the aforementioned
                        extra curricular activities, I also enjoy working out, taking walks, trying
                        new foods and watching Netflix
                      </td>
                    </tr>


                  </table>
                </Col>
              </Row>

            </Container>

          </div>
        </Jumbotron>
      );
    } else {
      return (
        <Jumbotron className="education-jumbo">
          <div>
            
              <center>
                <img className="profile-img" src="/images/me2.jpg" alt="Avatar" width="275" height="275" />
              </center>
              <h3>About</h3>
              I was born in Texas, raised in Germany and grew up in California.
                            Now I've gone full circle and am back at my birthplace studying Computer
                            Science at St. Edward's University in Austin, Texas.
                      <br />
              <br />
              I've been in Austin for 4 years but only began going back to school
              about 2 years ago. Before that, I had completed some college and was
              working as a social worker. After 5 fulfilling but challenging years
              in that field, I decided it was time for a change. I made the difficult
              and risky choice to go back to school full time in a field I had long had
              interest in - Computer Science.
                      <br />
              <br />
              Now, I am focusing my efforts on doing all things Computer Science
              including software development projects, participation in hackathons
              and capture the flag challenges (CTF), and attending coding and
              cybersecurity events. When I'm not studying or doing the aforementioned
              extra curricular activities, I also enjoy working out, taking walks, trying
              new foods and watching Netflix
         
          </div>
        </Jumbotron>
      )
    }
  }
}

export default withGetScreen(MyAboutMe);
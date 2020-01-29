import React from 'react';
import { Link } from "react-router-dom"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Collapse from 'react-bootstrap/Collapse'
import Button from "react-bootstrap/Button"
import { withGetScreen } from 'react-getscreen'
import "./index.css"

// TODO: 
// Address DRY
// Center image
// Section Title with less function vs Link to page

class MyAboutMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      read: true
    }

  }
  render() {
    const open = this.state.open;

    const less1 = "I was born in Texas, raised in Germany and grew up in California. Now, I've gone full circle and am back at my birthplace studying Computer Science at St. Edward's University in Austin, Texas."

    const less2 = "I've been in Austin for 4 years but only began going back to school full-time about 2 years ago. Before that, I already completed some college and was working as a social worker. After 5 fulfilling but challenging years in that field, I decided it was time for a change. I made the difficult and risky choice to quit my job and to go back to school full-time in a field I had long had interest in - Computer Science."

    const less3 = "Now, I am focusing my efforts on doing all things Computer Science including software development projects, participation in hackathons and capture the flag challenges (CTF), and attending coding and cybersecurity events. When I'm not studying or doing the aforementioned extra curricular activities, I also enjoy working out, taking walks, trying new foods and watching Netflix."

    const more1 = "While I enjoy most things coding, a particular interest of mine is in the field of cyber security. Part of the reason is definitely the challenge - and all the headbanging 💆‍♂️. The Jr. Pentester cert was fun. But I really enjoy getting deeper than just running exploits - I like to take a look under the hood, reverse engineer binaries and using assembly to modify the code, and create shell code."

    if (!this.props.isMobile()) {
      return (
        <>
          <div className="center-body">
            <span className='title'>
              ~/about_me
            <Link
                className="title-link"
                onClick={() => this.setState({ open: !open, read: !this.state.read })}
                aria-controls="example-fade-text"
                aria-expanded={open}
              > | {this.state.read ? 'more' : 'less'}
              </Link>
            </span>
          </div>

          <Jumbotron className="education-jumbo">
            <div>
              <Container>
                <Row>
                  <Col sm={3} className="img-col">
                    {/* <center> */}
                    <img className="profile-img" src="/images/me3.png" alt="Avatar" width="275" height="275" />
                    {/* </center> */}

                  </Col>
                  <Col>
                    <table >

                      <tr>
                        <td className="edu-field"><h3>About</h3></td>
                        <td>
                          {less1}
                          <br />
                          <br />
                          {less2}
                          <br />
                          <br />
                          {less3}
                          <br />
                        </td>
                      </tr>

                      <Collapse in={open}>
                        {/* <div id="example-collapse-text"> */}
                        <tr> <h3>Interest</h3>
                          <td>
                            {more1}
                          </td>
                        </tr>
                        {/* </div> */}
                      </Collapse>
                      <td></td><td>
                        <Button
                          onClick={() => this.setState({ open: !open, read: !this.state.read })}
                          variant="link"
                          aria-controls="example-fade-text"
                          aria-expanded={open}
                        >
                          {this.state.read ? 'more' : 'less'}
                        </Button>
                      </td>
                    </table>
                  </Col>
                </Row>

              </Container>

            </div>
          </Jumbotron>
        </>
      );
    } else {
      return (
        <>
          <div className="center-body">
            <span className='title'>
              ~/about_me
            <Link
                onClick={() => this.setState({ open: !open, read: !this.state.read })}
                aria-controls="example-fade-text"
                aria-expanded={open}
              > | {this.state.read ? 'more' : 'less'} </Link> </span>
          </div>

          <Jumbotron className="education-jumbo">
            <div>
              <img className="profile-img" src="/images/me3.png" alt="Avatar" width="275" height="275" />

              <h3>About</h3>
              {less1}
              <br />
              <br />
              {less2}
              <br />
              <br />
              {less3}

              <Collapse in={open}>
                <div id="example-collapse-text">
                  <br />
                  <h3>Interest</h3>
                  {more1}
                </div>
              </Collapse>

              <Button
                onClick={() => this.setState({ open: !open, read: !this.state.read })}
                variant="link"
                aria-controls="example-fade-text"
                aria-expanded={open}
              >
                {this.state.read ? 'more' : 'less'}
              </Button>

            </div>
          </Jumbotron>
        </>
      )
    }
  }
}

export default withGetScreen(MyAboutMe);
import React from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal"
import MyModal from "../Modal"
import style from "./index.css"; //style overright for cards
import { Link } from 'react-router-dom';


export default class MyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  };

  render() {
    const { image } = this.props;
    const { show } = this.state;
    return (
      <>
        <Link onClick={() => this.setState({ show: true })}>
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.intro}
              </Card.Text>
              <Card.Text>
                {this.props.tags.map(tag => <small className="text-muted">#{tag} </small>)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <MyModal {...this.props} show={show} hide={() => this.setState({ show: false })} />
      </>
    );
  }
}


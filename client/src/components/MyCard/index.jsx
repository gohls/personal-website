import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./index.css";
import { Link } from 'react-router-dom';


export default class MyCard extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const cardStyle = { 
      width: 'calc(33.3% - (25px - (25px / 3)))',
    };

    const { image } = this.props;
    return (
      <Link to={this.props.link}>
        <Card style={cardStyle}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{this.props.cardTitle}</Card.Title>
            <Card.Text>
              {this.props.cardText}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    );
  }
}


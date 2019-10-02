import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./index.css";

class MyCard extends React.Component {
  render() {
    const { image } = this.props;
    return (
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{this.props.cardTitle}</Card.Title>
          <Card.Text>
            {this.props.cardText}
            </Card.Text>
          <Button variant="primary">Learn more</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default MyCard;
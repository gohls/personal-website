import React from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal"
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
    const cardStyle = {
      // width: 'calc(33.3% - (25px - (25px / 3)))',
      // display: 'grid',
    };

    const { image } = this.props;
    const { show } = this.state;
    return (
      <>
        <Link onClick={() => this.setState({ show: true })}>
          <Card style={cardStyle}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Text>
                <small className="text-muted">{this.props.tags}</small>
              </Card.Text>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Modal
          size="lg"
          show={show}
          onHide={() => this.setState({ show: false })}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
              commodi aspernatur enim, consectetur. Cumque deleniti temporibus
              ipsam atque a dolores quisquam quisquam adipisci possimus
              laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
              accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
              reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
              deleniti rem!
          </p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}


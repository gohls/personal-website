import React from "react";
import Modal from "react-bootstrap/Modal"

export default function MyModal(props) {
  const show = props.show;
  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={props.hide}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Intro</h4>
          <p>
            {props.intro}
          </p>

          <h4>Description</h4>
          <p>
            {props.description}
          </p>

          <h4>Tech Stack</h4>
          <p>
            {props.tags.map(tag => <small>#{tag} </small>)}
          </p>

        </Modal.Body>
      </Modal>
    </>
  );
}


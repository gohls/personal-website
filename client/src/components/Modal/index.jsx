import React from "react";
import Modal from "react-bootstrap/Modal"
import Markdown from 'react-markdown'

export default class MyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contents: '' };
    // this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentWillMount() {
    console.log(this.props)
    fetch(this.props._dir)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ contents: text })
      })
  }

  render() {
    const show = this.props.show;
    const contents = this.state.contents;
    console.log(contents)
    return (
      <>
        <Modal
          size="lg"
          show={show}
          onHide={this.props.hide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {this.props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Intro</h4>
            <p>
              {this.props.intro}
            </p>

            <h4>Description</h4>
            <p>
              {this.props.description}
            </p>

            <h4>Tech Stack</h4>
            <p>
              {this.props.tags.map(tag => <small>#{tag} </small>)}
            </p>

            <Markdown source={contents} />

          </Modal.Body>
        </Modal>
      </>
    );
  }
}


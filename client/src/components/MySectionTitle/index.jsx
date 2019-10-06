import React from "react";
import "./index.css";

export default class MySectionTitle extends React.Component {
  render() {
    return (
      <div className="center-body">
      <span className='title'> {this.props.title} </span>
      </div>
    );
  }
}

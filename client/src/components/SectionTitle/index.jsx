import React from "react";
import "./index.css";

export default class MySectionTitle extends React.Component {
  render() {
    return (
      <div className="center-body">
        <span className='title'>~<a className="dirHeaders" href="#">{this.props.subDir}</a>{this.props.curDir}</span>
      </div>
    );
  }
}

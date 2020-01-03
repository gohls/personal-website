import React from "react";
import "./index.css";

export default class MySectionTitle extends React.Component {
  render() {
    return (
      <div className="center-body">
        <span className='title'>~<a className="subDir" href={this.props.subDir}>{this.props.subDir}</a>{this.props.curDir}</span>
      </div>
    );
  }
}

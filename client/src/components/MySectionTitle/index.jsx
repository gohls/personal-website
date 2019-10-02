import React from "react";
import "./index.css";

class MySectionTitle extends React.Component {
  render() {
    return (
      <div className="center-body">
      <div className='title'>{this.props.title}</div>
      </div>
    );
  }
}

export default MySectionTitle;
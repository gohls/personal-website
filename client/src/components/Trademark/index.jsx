import React from "react";
import "./index.css";

class MyTrademark extends React.Component {
  render() {
    return (
      <div className='trademark'>{this.props.trademark}</div>
    );
  }
}

export default MyTrademark;
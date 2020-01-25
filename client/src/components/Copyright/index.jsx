import React from "react";
import "./index.css";

class MyCopyright extends React.Component {
  render() {
    return (
      <div className='trademark'>© {this.props.trademark}</div>
    );
  }
}

export default MyCopyright;
import React from "react";
import "./login.css";

const Loginpop = () => {

  return (
    <div className="popup-login">
        <div className="box">
            <span className="close-icon" onClick={this.props.handleClose}>x</span>
        {this.props.content}
      </div>
    </div>
  );
};

export default Loginpop;
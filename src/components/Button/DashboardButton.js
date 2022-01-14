import React from "react";
import Button from "react-bootstrap/Button";
import "./button.css";

const DashButton = ({ click, style, title }) => {
  return (
    <Button onClick={click} className="dBtn" style={style} variant="dark">
      {title}
    </Button>
  );
};
export default DashButton;

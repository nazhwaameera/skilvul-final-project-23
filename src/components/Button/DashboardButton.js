import React from "react";
import Button from "react-bootstrap/Button";
import "./button.css";

const DashButton = ({ onClick, style, title }) => {
  return (
    <Button onClick={onClick} className="dBtn" style={style} variant="dark">
      {title}
    </Button>
  );
};
export default DashButton;

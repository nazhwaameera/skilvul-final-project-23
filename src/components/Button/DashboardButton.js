import React from "react";
import Button from "react-bootstrap/Button";
import "./button.css"

const DashButton = ({ style,title }) => {
  return <Button className="dBtn" style={style} variant="dark">{title}</Button>;
};
export default DashButton;

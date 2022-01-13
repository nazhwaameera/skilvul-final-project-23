import React from "react";
import Button from "react-bootstrap/Button";

const DashButton = ({ style,title }) => {
  return <Button style={style} variant="dark">{title}</Button>;
};
export default DashButton;

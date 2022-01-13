import React from "react";
import Button from "react-bootstrap/Button";
import "./button.css"

const Btnplus = ({style, ciri, title}) => {
  return <Button style={style} variant={ciri}>{title}</Button>;
};
export default Btnplus;

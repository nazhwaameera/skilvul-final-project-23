import React from "react";
import Button from "react-bootstrap/Button";
import "./button.css"

const Btnplus = ({onClick, style, ciri, title}) => {
  return <Button onClick={onClick} style={style} variant={ciri}>{title}</Button>;
};
export default Btnplus;

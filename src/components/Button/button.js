import Button from "react-bootstrap/Button";
// import * as styles from "./button.styles";

const ButtonItem = ({ title, radius }) => {
  return <Button style={{ borderRadius: radius }}>{title}</Button>;
};
export default ButtonItem;

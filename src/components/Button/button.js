import Button from "react-bootstrap/Button";
import "../Button/button.css";
// import * as styles from "./button.styles";


const ButtonItem = ({ style ,title }) => {
  return <Button className="btn" style={style}>{title}</Button>;
};
export default ButtonItem;

import Button from "react-bootstrap/Button";
import "../Button/button.css"

const ButtonItem = ({ style,title }) => {
  return <Button className="btn" style={style} variant="outline-dark">{title}</Button>;
};
export default ButtonItem;

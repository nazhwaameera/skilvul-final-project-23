import Button from "react-bootstrap/Button";
import "../Button/button.css";

const ButtonItem = ({ type, style, title, href }) => {
  return (
    <Button type={type} href={href} className="btn" style={style} variant="outline-dark">
      {title}
    </Button>
  );
};
export default ButtonItem;

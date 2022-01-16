import Button from "react-bootstrap/Button";
import "../Button/button.css";

const ButtonItem = ({ style, title, href }) => {
  return (
    <Button href={href} className="btn" style={style} variant="outline-dark">
      {title}
    </Button>
  );
};
export default ButtonItem;

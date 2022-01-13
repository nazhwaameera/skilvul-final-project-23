import Button from "react-bootstrap/Button";

const ButtonItem = ({ buttonLink, title }) => {
  return <Button href={buttonLink}>{title}</Button>;
};

export default ButtonItem;

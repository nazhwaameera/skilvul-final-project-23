import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export const CardComponent = (props) => {
  const { email, image, name, link } = props;
  return (
    <CardGroup className="mb-3">
      <Card>
        <Card.Img src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{email}</Card.Text>
          {/* <a href={link}>sss</a> */}
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

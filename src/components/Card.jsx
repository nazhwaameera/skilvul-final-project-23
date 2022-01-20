import { Row, Col, Button } from "react-bootstrap";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import Axios from "axios";
import PopQuest from "./mentor/popup";

export const CardComponent = (props) => {
  const { email, image, name, link, dlink, dbut, click } = props;

  // maps
  const [_id, setID] = useState("");
  console.log(_id);
  const Maps = () => {
    // console.log(_id);
    const data = {
      _id: _id,
    };
    Axios.post("https://backend-23.herokuapp.com/mentor/create-map", data, {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        console.log("post success", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  // // quest
  // const [mentor, setMentor] = useState("");
  // const [maps, setMaps] = useState("");
  // const Quest = () =>{
  //   console.log(_id)
  //   console.log(maps)
  //   const data = {
  //     _id: _id,
  //     id_mentor: mentor,
  //     id_maps: maps,
  //   };
  //   Axios.post("https://immense-cliffs-82383.herokuapp.com/mentor/create-map", data, {
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       console.log("post success", res);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  // };

  // popup

  return (
    <CardGroup className="mb-3">
      <Card>
        <Card.Img src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{email}</Card.Text>

          <Row>
            <Col md={4}>
              <Button onClick={Maps} value={_id} onChange={(e) => setID(e.target.value)}>
                {dbut}
              </Button>
            </Col>
            <Col md={4}>
              {/* <div value={_id} onChange={(e) => setID(e.target.value)}/>
        <div value={mentor} onChange={(e) => setMentor(e.target.value)}/>
        <div value={maps} onChange={(e) => setMaps(e.target.value)}/>
      <Button onClick={Quest}>{dqust}</Button> */}
              <PopQuest />
            </Col>
            <Col md={4}>
              <Link onClick={click} className="btn btn-primary w-100" to={`/dashboard/detail-penyelesaian/${link}`}>
                {dlink}
              </Link>
            </Col>
          </Row>
          {/* <a href={link}>sss</a> */}
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

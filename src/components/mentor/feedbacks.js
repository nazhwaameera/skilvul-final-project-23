import { ThemeProvider } from "@emotion/react";
import Axios from "axios";
import React, {useState, useEffect} from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Modal from "react-modal";
import Btnplus from "../Button/buttondata";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e06262"
    }
  },
  background: {
    color: {
      primary: "#c9fffa"
    }
  }
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const FeedB = (dqust) => {
 
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  // quest
  const [konten, setKonten] = useState("");
  const [id_quest, setQuest] = useState("");
  const Quest = () =>{
    console.log(id_quest)
    console.log(konten)
    const data = {
      konten: konten,
      id_quest: id_quest
    };
    Axios.post(`https://hidden-harbor-17802.herokuapp.com/mentor/create-feedback/${id_quest}`, data, {
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
//   const { id_quest } = useParams();

 return (
    <div>
        <Btnplus onClick={openModal} title={"Feedbacks"} ciri={"secondary"} />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ThemeProvider theme={theme}>
          <h1>Masukkan Saran</h1>
          {/* <div style={{display: "flex",justifyContent:"center"}}></div> */}
            {/* <div value={mentor} onChange={(e) => setMentor(e.target.value)}/>
            <div value={maps} onChange={(e) => setMaps(e.target.value)}/> */}
            <Form>ID Quest</Form>
            <input value={id_quest} onChange={(e) => setQuest(e.target.value)}/>
            <Form>Saran Anda</Form>
            <input name="konten" value={konten} onChange={(e) => setKonten(e.target.value)}/>{' '}
      <Button onClick={Quest}>Komentar</Button>
        </ThemeProvider>
      </Modal>
    </div>
  );
};

export default FeedB;
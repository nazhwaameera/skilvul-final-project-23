import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import Modal from "react-modal";
import DashButton from "../../components/Button/DashboardButton";
import Navbar1 from "../../components/navbar";
import people from "../../image/people_01.jpg";
import background from "../../image/background.png";
import "./css/dasboard.css";
import Mentoring from "./mentoring";
import TodoList from "../../components/Pages/TodoList";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e06262",
    },
  },
  background: {
    color: {
      primary: "#c9fffa",
    },
  },
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    overflow: "hidden",
    background: "none",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Dashboard1 = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // return (
  //   <>
  //   <div style={{ backgroundImage: `url(${background})` }}>
  //     <Navbar1 name="verydian" />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <Container>
  //       <Row>
  //         <Col md={4} sm={6} className="button1">
  //           <Stack gap={4} style={{marginTop:"50px"}}>
  //             <Link to="/Profile" >
  //               <DashButton title="Profile" style={{borderRadius: "100px", padding: "10px 150px 10px 160px"}}/>
  //             </Link>
  //             <Link to="/Quest" >
  //               <DashButton title="Quest" style={{borderRadius: "100px", padding: "10px 150px 10px 160px"}}/>
  //             </Link>
  //             <Mentoring/>

  //           </Stack>
  //         </Col>
  //         <Col md={4} sm={6} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
  //           <img
  //                    src={people} alt="user"
  //                    width={128} height={369}

  //                    />
  //         </Col>
  //         <Col md={4} sm={6}>
  //           <Stack gap={4} style={{marginTop:"50px"}}>
  //               <Link to="/Feedback" >
  //                 <DashButton title="Feedbacks" style={{borderRadius: "100px", padding: "10px 150px 10px 160px"}} href="#feedbacks"/>
  //               </Link>

  //               <Link to="/Profile" >
  //                 <DashButton title="Achievements" style={{borderRadius: "100px", padding: "10px 130px 10px 130px"}} href="#achievements"/>
  //               </Link>

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

  return (
    <>
      <div style={{ backgroundImage: `url(${background})` }}>
        <Navbar1 name="verydian" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col md={4} sm={6} className="button1">
              <Stack gap={4} style={{ marginTop: "50px" }}>
                <Link to="/Profile">
                  <DashButton title="Profile" style={{ borderRadius: "100px", padding: "10px 150px 10px 160px" }} />
                </Link>
                <Link to="/Quest">
                  <DashButton title="Quest" style={{ borderRadius: "100px", padding: "10px 150px 10px 160px" }} href="#quest" />
                </Link>
                <Mentoring />
              </Stack>
            </Col>
            <Col md={4} sm={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={people} alt="user" width={128} height={369} />
            </Col>
            <Col md={4} sm={6}>
              <Stack gap={4} style={{ marginTop: "50px" }}>
                <DashButton title="Feedbacks" style={{ borderRadius: "100px", padding: "10px 150px 10px 160px" }} href="#feedbacks" />
                <Link to="/Profile">
                  <DashButton title="Achievements" style={{ borderRadius: "100px", padding: "10px 150px 10px 125px" }} href="#achievements" />
                </Link>
                <DashButton onClick={openModal} title="ToDo List" style={{ borderRadius: "100px", padding: "10px 140px 10px 140px" }} href="#todo" />
                <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                  {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
                  <ThemeProvider theme={theme}>
                    <TodoList />
                  </ThemeProvider>
                </Modal>
              </Stack>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Dashboard1;

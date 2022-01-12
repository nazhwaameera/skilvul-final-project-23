import { ThemeProvider } from "@emotion/react";
import React from "react";
import Modal from "react-modal";

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

function Popup() {
    let subtitle;
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
  
    return (
      <div>
        <button onClick={openModal}>Open Todo</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
          <ThemeProvider theme={theme}>
            <TodoList />
          </ThemeProvider>
        </Modal>
      </div>
    );
  }

export default Popup;
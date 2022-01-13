import React from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import ButtonItem from "./components/Button/button";
import Remedial from "./image/Remedial.png";
import Loginpop from "./Login";

const Onboarding = () => {

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    return (
        <div>
            <Row>
                <Col md={4}/>
                <Col md={4}>
                    <Row>
                        {/* <Image src={Remedial} width={526} height={430} fluid />
                        <div className="d-flex justify-content-center mb-3">
                            <Link to="/home" >
                                <ButtonItem title="Get Started" style={{borderRadius: "100px"}}/>
                            </Link>
                        </div> */}
                        <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    {isOpen && <Loginpop
      content={<>
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
                    </Row>
                </Col>
                <Col md={4}/>
            </Row>
        </div>
    )
}

export default Onboarding;
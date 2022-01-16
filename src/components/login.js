import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonItem from "./Button/button";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login1 = (id) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email is incorrect").required("Required!"),
      password: Yup.string().min(6, "Minimum 6 characters").required("Required!"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div id={id} className="App" style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label style={{ marginLeft: "10px", marginRight: "38px" }}>Email</label>
          <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
          {formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>}
        </div>
        <br />
        <div>
          <label style={{ marginLeft: "10px", marginRight: "10px" }}>Password</label>
          <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
          {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>}
        </div>
        <div>
          <br />
          <Link to="/home">
            <ButtonItem title="Login" style={{ borderRadius: "100px", padding: "10px 120px 10px 120px" }} />
          </Link>
          <Row>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <Link to="/Mentor">
                <Button variant="link">As Mentor</Button>
              </Link>{" "}
              <Link to="/Admin">
                <Button variant="link">As Admin</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </form>
    </div>
  );
};

export default Login1;

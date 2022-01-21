import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import ButtonItem from "./Button/button";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login1 = ({ id, endpoint, loc }) => {
  // const [data, setData] = useState({ email: "", password: "" });
  // const [error, setError] = useState("");

  // const handleChange = ({ currentTarget: input }) => {
  //   setData({ ...data, [input.name]: input.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const url = "http://localhost:8080/api/auth";
  //     const { data: res } = await axios.post(url, data);
  //     localStorage.setItem("token", res.data);
  //     window.location = "/";
  //   } catch (error) {
  //     console.log(error.response.data.message);
  //   }
  // };

  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email is incorrect").required("Required!"),
      password: Yup.string().min(6, "Minimum 6 characters").required("Required!"),
    }),
    onSubmit: async (values) => {
      // e.preventDefault();
      // console.log(values);
      try {
        const url = endpoint;
        const { data: res } = await axios.post(url, values, {
          headers: {
            "content-type": "application/json",
          },
        });
        if (url == "https://backend-23.herokuapp.com/admin/login") {
          localStorage.setItem("admin", res.token);
          localStorage.setItem("id", res.admin._id);
        }
        if (url == "https://backend-23.herokuapp.com/mentor/login") {
          localStorage.setItem("mentor", res.token);
          localStorage.setItem("nama", res.mentor.nama);
          localStorage.setItem("id", res.mentor._id);
        }
        if (url == "https://backend-23.herokuapp.com/peserta/login") {
          localStorage.setItem("user", res.token);
          localStorage.setItem("id", res.peserta._id);
          localStorage.setItem("nama", res.peserta.nama);
          localStorage.setItem("kelas", res.peserta.kelas);
          localStorage.setItem("asal", res.peserta.asal_sekolah);
        }
        window.location = loc;
      } catch (error) {
        setError(error.response.data.error.message);
      }
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
          {/* <Link to="/home"> */}
          {error && <div className="bg-danger text-white text-center mb-2 rounded-pill">{error}</div>}
          <ButtonItem type="submit" title="Login" style={{ borderRadius: "100px", padding: "10px 120px 10px 120px" }} />
          {/* </Link> */}
          {/* <Row>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <Link to="/Mentor">
                <Button variant="link">As Mentor</Button>
              </Link>{" "}
              <Link to="/Admin">
                <Button variant="link">As Admin</Button>
              </Link>
            </Col>
          </Row> */}
        </div>
      </form>
    </div>
  );
};

export default Login1;

import axios, { Axios } from "axios";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Form, Card } from "react-bootstrap";
import "./index.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [url, setUrl] = useState(
    "http://localhost:8088/api/user-management/register"
  );

  useEffect(() => {});
  const navigate = useNavigate();

  const regis = (e) => {
    console.log(email);
    console.log(password);
    console.log(birthdate);
    console.log(fullname);
    console.log(address);
    e.preventDefault();
    axios
      .post(url, {
        email: email,
        password: password,
        birthdate: birthdate,
        fullname: fullname,
        address: address,
      })
      .then(function (response) {
        console.log(response.status);
        if (response.status === 200) {
          alert("Success register, please login");
          navigate("/");
        } else {
          alert("Failed register, please fill the all form");
          navigate("/registration");
        }
      });
  };

  return (
    <>
      <section id="wrapper" className="login-register login-sidebar">
        <Card className="card__container">
          <Card.Body className="card__body">
            <Form
              className="form-horizontal form-material"
              id="loginform"
              style={{
                padding: "1rem",
                backgroundColor: "cadetblue",
                border: "0 solid black",
                borderRadius: "15px",
              }}
            >
              <h4 className="box-title m-t-40 m-b-0">Register User</h4>
              <div className="form-group m-t-20">
                <div className="col-xs-12">
                  <input
                    className="form-control"
                    type="text"
                    required=""
                    placeholder="Fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    pattern="[a-zA-Z ]*"
                    minlength="3"
                    maxlength="30"
                  />
                </div>
              </div>
              <div className="form-group ">
                <div className="col-xs-12">
                  <input
                    className="form-control"
                    type="email"
                    required=""
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group ">
                <div className="col-xs-12">
                  <textarea
                    className="form-control"
                    type="text"
                    required=""
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    minlength="12"
                  />
                </div>
              </div>
              <div className="form-group ">
                <label for="birthdate">Birthdate</label>
                <br></br>
                <div className="col-xs-12">
                  <input
                    className="form-control"
                    type="date"
                    required=""
                    placeholder="Birthdate"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group ">
                <div className="col-xs-12">
                  <input
                    className="form-control"
                    type="password"
                    required=""
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength="4"
                  />
                </div>
              </div>
              <div className="form-group text-center m-t-20">
                <div className="col-xs-12">
                  <button
                    className="btn btn-success btn-lg btn-block text-uppercase waves-effect waves-light"
                    type="submit"
                    onClick={regis}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              <div className="form-group m-b-0">
                <div className="col-sm-12 text-center">
                  <p style={{ margin: "1em 0" }}>
                    Already have an account?{" "}
                    <Link to="/" className="link">
                      <b>Sign In</b>
                    </Link>
                  </p>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </section>
    </>
  );
};

export default Register;

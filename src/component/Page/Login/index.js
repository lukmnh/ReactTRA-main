import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Container, Form, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
var qs = require("qs");

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const navigate = useNavigate();

  const [url, setUrl] = useState(
    "http://localhost:8080/api/user-management/login"
  );

  useEffect(() => {});

  const auth = (e) => {
    console.log(username);
    console.log(password);
    e.preventDefault();
    axios
      .post(url, qs.stringify({ username: username, password: password }))
      .then(function (response) {
        console.log(response.status);
        if (response.status === 200) {
          alert("Login success");
          localStorage.setItem("authenticated", true);
          navigate("/user");
        } else {
          alert("Login failed");
          navigate("/");
        }
      });
  };

  return (
    <>
      <Container className="container">
        <h2 className="text-center">Form Login</h2>
        <Card className="mt-5">
          <Card.Body style={{ backgroundColor: "cadetblue" }}>
            <Form onSubmit={auth} className="form">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <br></br>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="username"
                  label="Email Address"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <br></br>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  label="Email Address"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <div className="card__button-group">
                <Button type="submit">Submit</Button>
                <Button
                  variant="outline-primary"
                  className="mt-2"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/registration");
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default Login;

// function Index() {
//   const [username, setUserName] = useState();
//   const [password, setPassword] = useState();
//   const navigate = useNavigate();

//   async function loginUser(credentials) {
//     // return fetch("http://localhost:8080/api/user-management/login", {
//     //   method: "POST",
//     //   headers: {
//     //
//     //   },
//     //   body: JSON.stringify(credentials),
//     // }).then((data) => data.json());

//     return axios
//       .post(
//         "http://localhost:8080/api/user-management/login",
//         {
//           email: username,
//           password: password,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then(localStorage("user"));
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await loginUser({
//       username,
//       password,
//     })
//       .then((value) => {
//         window.location.href = "/";
//       })
//       .catch((err) => console.warn(err));
//   };

//   return (
//     <>
//       <Container className="container">
//         <h2 className="text-center">Form Login</h2>
//         <Card className="mt-5">
//           <Card.Body style={{ backgroundColor: "cadetblue" }}>
//             <Form onSubmit={handleSubmit} className="form">
//               <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <br></br>
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter email"
//                   name="email"
//                   size="lg"
//                   label="Email Address"
//                   onChange={(e) => setUserName(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <br></br>
//                 <Form.Control
//                   type="password"
//                   placeholder="Password"
//                   name="password"
//                   label="Email Address"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </Form.Group>
//               <div className="card__button-group">
//                 <Button type="submit">Submit</Button>
//                 <Button
//                   variant="outline-primary"
//                   className="mt-2"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     navigate("/registration");
//                   }}
//                 >
//                   Sign Up
//                 </Button>
//               </div>
//             </Form>
//           </Card.Body>
//         </Card>
//       </Container>
//     </>
//   );
// }

// export default Index;

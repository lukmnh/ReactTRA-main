import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { Card, Form } from "react-bootstrap";
import "./index.css";

const TRA = () => {
  const [email, setEmail] = useState();
  const [start_journey, setStartJourney] = useState();
  const [end_journey, setEndJourney] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState(
    "http://localhost:8088/api/travel-expense/form-request"
  );
  useEffect(() => {});
  const navigate = useNavigate();

  const request = (e) => {
    console.log(email);
    console.log(start_journey);
    console.log(end_journey);
    console.log(start_date);
    console.log(end_date);
    console.log(description);
    e.preventDefault();
    axios
      .post(url, {
        email: email,
        start_journey: start_journey,
        end_journey: end_journey,
        start_date: start_date,
        end_date: end_date,
        description: description,
      })
      .then(function (response) {
        console.log(response.status);
        if (response.status === 200) {
          alert("Success request travel");
          navigate("/user");
        } else {
          alert("Failed request travel");
          navigate("/form-travel");
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
              <h3>Travel Request Arrangement</h3>
              <h4 className="box-title m-t-40 m-b-0">Form Travel Request</h4>
              <div className="form-group m-t-20">
                <div className="form-group ">
                  <div className="col-xs-12">
                    <label for="email">User email</label>
                    <br></br>
                    <input
                      className="form-control"
                      type="text"
                      required=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-xs-12">
                  <label for="start_journey">Starting city</label>
                  <br></br>
                  <input
                    className="form-control"
                    type="text"
                    required=""
                    placeholder="Location to start the trip"
                    pattern="[a-zA-Z ]*"
                    minLength="4"
                    value={start_journey}
                    onChange={(e) => setStartJourney(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group ">
                <div className="col-xs-12">
                  <label for="end_journey">Destination city</label>
                  <br></br>
                  <input
                    className="form-control"
                    type="text"
                    required=""
                    placeholder="Location to end the trp"
                    pattern="[a-zA-Z ]*"
                    minLength="4"
                    value={end_journey}
                    onChange={(e) => setEndJourney(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group ">
                <div className="col-xs-12">
                  <label for="start_date">Start date</label>
                  <br></br>
                  <input
                    className="form-control"
                    type="date"
                    required=""
                    placeholder="Choose date that to start your trip"
                    value={start_date}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group ">
                <div className="col-xs-12">
                  <label for="end_date">End date</label>
                  <br></br>
                  <input
                    className="form-control"
                    type="date"
                    required=""
                    placeholder="Choose date that to end your trip"
                    value={end_date}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group ">
                <div className="col-xs-12">
                  <label for="description">Purpose of the trip</label>
                  <br></br>
                  <textarea
                    className="form-control"
                    required=""
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group text-center m-t-20">
                <div className="col-xs-12">
                  <button
                    className="btn btn-success btn-lg btn-block text-uppercase waves-effect waves-light"
                    type="submit"
                    onClick={request}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </section>
    </>
  );
};

export default TRA;

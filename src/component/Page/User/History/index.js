import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Badge, Container, Table } from "react-bootstrap";
import axios from "axios";

function Index() {
  const [data, setData] = useState([""]);
  useEffect(() => {
    //membaca dari local server
    getData();
    console.log("hasillk");
  }, []);

  //mendapatkan data katalogo
  const getData = () => {
    axios.get("http://localhost:8080/api/user-management").then((result) => {
      setData(result.data);
      console.log("hasil", result);
    });
  };

  //   reject
  // const deletee = (id) => {
  //   axios.delete("http://localhost:8080/api/emptime/" + id).then(() => {
  //     getData();
  //     console.log("Delete successfully!");
  //   });
  // };

  return (
    <>
      <Container className="mt-3">
        <Link to="/daily" className="btn btn-primary mb-2">
          Add Request
        </Link>
        {""}
        <h2 className="text-center">History </h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              {/* <th>Start Hour</th>
              <th>End Hour</th>
              <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.fullname}</td>
                  <td>{item.email}</td>
                  {/* <td>{item.start_Hour}</td>
                  <td>{item.end_Hour}</td> */}
                  <td>
                    {/* <div
                      onClick={() => {
                        deletee(item.id);
                      }}
                    >
                      <Badge bg="danger">Delete</Badge>{" "}
                    </div> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Index;

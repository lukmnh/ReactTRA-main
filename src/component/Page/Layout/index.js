import { Link, Outlet } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./index.css";

const Layout = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Travel Request Arrangement</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/user">Dashboard</Nav.Link>
              <Nav.Link href="/form-travel">Travel Request</Nav.Link>
              <Nav.Link href="/history">History</Nav.Link>
              <Nav.Link href="/manager">Manager</Nav.Link>
              <Nav.Link href="/finance">Finance</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};
export default Layout;

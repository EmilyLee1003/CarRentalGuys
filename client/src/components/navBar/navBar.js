import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";

function Navigation() {
  const history = useHistory();

  function About() {
    history.push("/about");
  }

  function home() {
    history.push("/");
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link onClick={home}>Home</Nav.Link>
          <Nav.Link onClick={About}>About</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;

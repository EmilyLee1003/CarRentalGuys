import React from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./style.css";

function Footer() {
  let history = useHistory();

  function handleClick() {
    history.push("/userAuth");
  }

  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h1> We Thank You for your trust in us</h1>
            <p>
              {" "}
              We are grateful that our customers have chosen us and our cars for
              your trip. We hope to see our customers again soon.{" "}
            </p>
          </Col>
          <Col>
            <h1> Contact Us</h1>
            <p> phone number: 626-672-9893</p>
            <p> email address: jli4342@gmail.com</p>
          </Col>
          <Col>
            <button className="button" onClick={handleClick}>
              Login as an Admin
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;

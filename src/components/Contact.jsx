import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <Container id="contact">
        <Row>
          <Col>
            <h2>Get In Touch</h2>
            <h5>
              Liked my work? Want to get in touch? <br />
              You can reach out to me at-
            </h5>
            <br />
            <h5>
              <a href="mailto:vansh27000@gmail.com" className="contact-me">
                <span>
                  {" "}
                  <i className="fa fa-envelope"></i>
                </span>
                <span>vansh27000@gmail.com</span>
              </a>
            </h5>

            <h5>
              <a href="tel:8445230312" className="contact-me">
                <span>
                  {" "}
                  <i className="fa fa-phone"></i>
                </span>
                <span>8445230312</span>
              </a>
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

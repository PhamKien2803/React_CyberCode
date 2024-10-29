import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import Content from "./Content";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container fluid style={{padding: "0", overflow: "hidden"}}>
            
          <Row>
            <Col md={12}>
              <Header />
            </Col>

            <Col md={12}>
              <Navigation />
            </Col>

            <Col md={12}>
              <Content />
            </Col>

            <Col md={12}>
              <Footer />
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

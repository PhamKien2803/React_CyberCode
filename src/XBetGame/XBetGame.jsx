import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/XetGame.css";
import Score from "./Score";
import DanhSachDatCuoc from "./DanhSachDatCuoc";
import DanhSachXucXac from "./DanhSachXucXac";


function XBetGame(props) {
  return (
    <Container id="BaiTapGameBauCua" fluid style={{ margin: 0}}>
      <div style={{ textAlign: "center" }}>
        <img
          style={{ width: "35%" }}
          src={require("./image/Logo.png")}
          alt="logo"
        />
      </div>
      <Score />
      <Row>
        <Col md={8}>
          <DanhSachDatCuoc />
        </Col>

        <Col md={4}>
          <DanhSachXucXac/>
        </Col>
      </Row>
    </Container>
  );
}

export default XBetGame;

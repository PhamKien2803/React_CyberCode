import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import backgroundGame from "./Image/bgGame.png";
import XucXac from "./XucXac";
import InformationGame from "./InformationGame";
import fontText from "./font/Pony.ttf";
import { useEffect } from "react";
import { connect } from "react-redux";

function TaiXiuHome({ datCuoc, playgame }) {
  const applyFont = () => {
    const newStyle = document.createElement("style");
    newStyle.appendChild(
      document.createTextNode(`
      @font-face {
        font-family: 'fontGame';
        src: url(${fontText});
      }
    `)
    );
    document.head.appendChild(newStyle);
  };

  useEffect(() => {
    applyFont();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundGame})`,
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        backgroundSize: "100% 100%",
        minHeight: "100vh",
      }}
    >
      <Container>
        <Row style={{ textAlign: "center" }}>
          <Col>
            <h1
              style={{
                marginTop: "3%",
                fontFamily: "fontGame",
                fontSize: "4.5rem",
              }}
            >
              Tài Xỉu Online
            </h1>
          </Col>
        </Row>

        <Row style={{ textAlign: "center", marginTop: "3%" }}>
          <Col md={5}>
            <Button
              onClick={() => {
                datCuoc(true);
              }}
              style={{
                fontFamily: "fontGame",
                width: "200px",
                height: "200px",
                backgroundColor: "rgb(82, 108, 238)",
                border: "none",
                border: "5px solid rgb(82, 238, 98)",
                borderRadius: "10px",
              }}
            >
              <h2 style={{ fontSize: "3.5rem" }}>TÀI</h2>
            </Button>
          </Col>

          <Col md={2}>
            <XucXac />
          </Col>

          <Col md={5}>
            <Button
              onClick={() => {
                datCuoc(false);
              }}
              style={{
                fontFamily: "fontGame",
                width: "200px",
                height: "200px",
                backgroundColor: "rgb(82, 108, 238)",
                border: "none",
                border: "5px solid rgb(82, 238, 98)",
                borderRadius: "10px",
              }}
            >
              <h2 style={{ fontSize: "3.5rem" }}>XỈU</h2>
            </Button>
          </Col>
        </Row>

        <Row style={{ textAlign: "center" }}>
          <Col md={12}>
            <InformationGame />
            <Button
              onClick={() => playgame()}
              variant="success"
              style={{ fontFamily: "fontGame" }}
            >
              Play game
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const clickTaiOrXiu = (dispatch) => {
  return {
    datCuoc: (taixiuXucSac) => {
      let action = {
        type: "DAT_CUOC",
        taixiuXucSac,
      };
      dispatch(action);
    },

    playgame: (playGameTaiXiu) => {
      dispatch({
        type: "PLAY_GAME",
        playGameTaiXiu,
      });
    },
  };
};

export default connect(null, clickTaiOrXiu)(TaiXiuHome);

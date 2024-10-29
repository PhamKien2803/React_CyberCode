import React, { useEffect } from "react";
import backgroundGame from "./Image/bgGame.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import fontText from "./font/Pony.ttf";
import InformationGame from "./InformationGame";
// import KeoBuaBao from "./KeoBuaBao";
import ResultGame from "./ResultGame";
import Player from "./Player";
import Computer from "./Computer";
import '../OanTuXiGame/Css/Game.css';
import { connect } from "react-redux";
function OanTuXiHome({playGameProps}) {
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
        backgroundSize: "100% 100%",
        minHeight: "150vh",
      }}
    >
      <Container fluid>
        <Row style={{ textAlign: "center" }}>
          <Col>
            <ResultGame />
          </Col>
        </Row>

        <Row style={{ textAlign: "center" }}>
          <Col md={5} style={{marginTop: "-100px"}}>
            <Player />
            {/* <KeoBuaBao /> */}
          </Col>
          <Col md={2}>
            <InformationGame />

            <Button
              onClick={() => {playGameProps()}}
              variant="success"
              style={{ fontFamily: "fontGame" }}
            >
              Play game
            </Button>
          </Col>
          <Col md={5} style={{marginTop: "-100px"}}>
            <Computer/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const playGamePropsToState = (dispatch) => {
  return {
    playGameProps : (randomPlay) => {
      dispatch({
        type: "PLAY_GAME_RANDOM",
        randomPlay
      })
    } 
  }
}

export default connect(null, playGamePropsToState)(OanTuXiHome);

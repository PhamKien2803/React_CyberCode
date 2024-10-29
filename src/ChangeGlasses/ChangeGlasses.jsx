import React, { useState, useEffect } from "react";
import { Col, Container, Row, Card, Image } from "react-bootstrap";
import axios from "axios";
import HeaderGlasses from "./HeaderGlasses";
import BackgroundGlasses from "./BackgroundGlasses/background.jpg";
import { useSpring, animated } from "@react-spring/web";
// Import ảnh
import gucciG8850U from "./BackgroundGlasses/v1.png";
import gucciG8759H from "./BackgroundGlasses/v2.png";
import diorD6700HQ from "./BackgroundGlasses/v3.png";
import diorD6005U from "./BackgroundGlasses/v4.png";
import pradaP8750 from "./BackgroundGlasses/v5.png";
import pradaP9700 from "./BackgroundGlasses/v6.png";
import fendiF8750 from "./BackgroundGlasses/v7.png";
import fendiF8500 from "./BackgroundGlasses/v8.png";
import fendiF4300 from "./BackgroundGlasses/v9.png";

function ChangeGlasses() {
  const [glasses, setGlasses] = useState([]);
  const [selectedGlass, setSelectedGlass] = useState(null);

  useEffect(() => {
    axios
      .get("/Glasses")
      .then((response) => setGlasses(response.data))
      .catch((err) => console.log(err));
  }, []);

  const glassImages = {
    1: gucciG8850U,
    2: gucciG8759H,
    3: diorD6700HQ,
    4: diorD6005U,
    5: pradaP8750,
    6: pradaP9700,
    7: fendiF8750,
    8: fendiF8500,
    9: fendiF4300,
  };

  const props = useSpring({
    opacity: selectedGlass ? 1 : 0,
    transform: selectedGlass ? `scale(1)` : `scale(0.5)`,
    config: { tension: 220, friction: 120 },
  });

  const selectGlasses = (glass) => {
    setSelectedGlass(glass);
  };

  const renderDataGlasses = () => {
    return glasses.map((glass) => (
      <Col xs={12} md={2} key={glass?.id} style={{ marginBottom: "3%" }}>
        <Card
          onClick={() => selectGlasses(glass)}
          style={{ cursor: "pointer" }}
        >
          <Card.Img
            variant="top"
            src={glassImages[glass?.id]}
            alt={glass?.name}
          />
        </Card>
      </Col>
    ));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundGlasses})`,
        minHeight: "2000px",
        backgroundPosition: "center",
      }}
    >
      <HeaderGlasses />
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", minHeight: "2000px" }}
      >
        <Container fluid style={{ width: "85%", paddingTop: "20px" }}>
          <Row style={{ justifyContent: "center" }}>
            <Col xs={12} md={6} style={{ textAlign: "center" }}>
              <div style={{ position: "relative" }}>
                <Image
                  style={{ width: "300px", position: "absolute" }}
                  src={require("./BackgroundGlasses/model.jpg")}
                  rounded
                />
                {selectedGlass && (
                  <animated.div style={{ ...props }}>
                    <Image
                      style={{
                        width: "200px",
                        position: "absolute",
                        marginTop: "80px",
                        right: "59px",
                        opacity: "0.7",
                      }}
                      src={glassImages[selectedGlass?.id]}
                      rounded
                    />
                    <div
                      style={{
                        position: "relative",
                        width: "300px",
                        top: "261px",
                        left: "311px",
                        paddingLeft: "15px",
                        backgroundColor: "rgba(255,127,0,.5)",
                        textAlign: "left",
                        height: "105px",
                        borderRadius: "6px",
                      }}
                    >
                      <span
                        style={{
                          color: "black",
                          fontSize: "17px",
                          fontWeight: "bold",
                        }}
                      >
                        {selectedGlass?.name || "No Glass Selected"}
                      </span>
                      <span style={{ fontSize: "13px", fontWeight: "400" }}>
                        <p>
                          {selectedGlass?.desc ||
                            "Select a glass to see details."}
                        </p>
                      </span>
                    </div>
                  </animated.div>
                  
                )}
              </div>
            </Col>

            <Col xs={12} md={6} style={{ textAlign: "center" }}>
              <Image
                style={{ width: "300px" }}
                src={require("./BackgroundGlasses/model.jpg")}
                rounded
              />
            </Col>
          </Row>

          <Row style={{ marginTop: "5%" }}>
            <Col md={12}>
              <div
                style={{
                  backgroundColor: "white",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  padding: "10px",
                }}
              >
                <Row>{renderDataGlasses()}</Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ChangeGlasses;

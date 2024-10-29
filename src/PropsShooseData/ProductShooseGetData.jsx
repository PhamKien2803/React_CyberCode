import React, { useState } from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";

function ProductShooseGetData({propsProduct, shooseModalFadeProps}) {
  const [activeTab, setActiveTab] = useState("home");

  const renderDataPropsShoose = () => {
    return propsProduct.map((pro) => (
      <Col xs={12} sm={6} md={4} lg={4} key={pro.id}>
        <Card className="w3-container w3-center w3-animate-zoom" style={{ width: "18rem", marginBottom: "2%"}}>
          <Card.Img variant="top" src={pro.image} alt="Image" />
          <Card.Body>
            <Card.Title>{pro.name}</Card.Title>
            <Card.Text>{pro.shortDescription}</Card.Text>
            <Button onClick={() => shooseModalFadeProps(pro)} style={{ color: "white" }} variant="dark">
              View To Details{" "}
              <i
                style={{ fontSize: "20px", marginLeft: "8px" }}
                className="fa fa-shopping-cart"
              ></i>
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <div>
      <Container fluid style={{ width: "95%" }}>
        <Row>
          <Col md={2}>
            <div
              style={{ minHeight: "800px", justifyContent: "center" }}
              className="nav flex-column nav-pills"
              role="tablist"
            >
              <a
                className={`nav-link ${activeTab === "home" ? "active" : ""}`}
                onClick={() => setActiveTab("home")}
                role="tab"
              >
                Home
              </a>
              <a
                className={`nav-link ${
                  activeTab === "profile" ? "active" : ""
                }`}
                onClick={() => setActiveTab("profile")}
                role="tab"
              >
                Profile
              </a>
              <a
                className={`nav-link ${
                  activeTab === "messages" ? "active" : ""
                }`}
                onClick={() => setActiveTab("messages")}
                role="tab"
              >
                Messages
              </a>
              <a
                className={`nav-link ${
                  activeTab === "settings" ? "active" : ""
                }`}
                onClick={() => setActiveTab("settings")}
                role="tab"
              >
                Settings
              </a>
            </div>
          </Col>

          <Col md={10}>
            <Row>
              <h1 style={{ textAlign: "center" }}>Shoose Shop</h1>
            </Row>

            <Row>
              <div className="tab-content">
                {activeTab === "home" && (
                  <div className="tab-pane fade show active">
                    <Row>{renderDataPropsShoose()}</Row> {/* Render sản phẩm */}
                  </div>
                )}
                {activeTab === "profile" && (
                  <div className="tab-pane fade show active">
                    <div>Profile content goes here.</div>
                  </div>
                )}
                {activeTab === "messages" && (
                  <div className="tab-pane fade show active">
                    <div>Messages content goes here.</div>
                  </div>
                )}
                {activeTab === "settings" && (
                  <div className="tab-pane fade show active">
                    <div>Settings content goes here.</div>
                  </div>
                )}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductShooseGetData;

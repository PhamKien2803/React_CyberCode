import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";

function ModalFadePayment({ show, onHide, paymentSeat }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Xác nhận thanh toán</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "purple" }}>
        <Container fluid style={{ width: "90%" }}>
          <Row style={{ backgroundColor: "white", borderRadius: "13px" }}>
            <Col md={2}>
              <Image
                className="mt-1 mb-1"
                style={{
                  width: "50px",
                  borderRadius: "50px",
                  marginLeft: "9%",
                }}
                src={require("../ProjectOrderTicketMovie/Image/TPbankLogo.jpg")}
                alt="TPBank"
              ></Image>
            </Col>

            <Col md={8}>
              <Row className="mt-2">
                <h4 style={{ fontSize: "13px" }}>PHAM DUY KIEN</h4>
                <h4>0470 8616 501</h4>
              </Row>
            </Col>
          </Row>

          <Row className="mt-3">
            <Image
              src={require("../ProjectOrderTicketMovie/Image/paymentQR.jpg")}
              alt="bankQR"
            ></Image>
          </Row>

          <Form>
            <Form.Group
              style={{ textAlign: "center" }}
              className="mb-3"
            ></Form.Group>
            <Form.Group className="mb-3"></Form.Group>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Đóng
        </Button>
        <Button variant="primary" onClick={paymentSeat}>
          Xác nhận
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    paymentSeat: () => {
      dispatch({
        type: "PAYEMENT_SEAT",
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(ModalFadePayment);

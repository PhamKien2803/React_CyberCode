import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CartModalFade() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Trigger to open modal */}
      <span
        onClick={handleShow}  // Call handleShow when span is clicked
        style={{
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
          cursor: "pointer"
        }}
      >
        <h5>
          Giỏ hàng của bạn
          <i
            style={{
              fontSize: "20px",
              marginLeft: "8px",
              justifyContent: "flex-start",
            }}
            className="fa fa-shopping-cart"
          ></i>
          (0)
        </h5>
      </span>

      {/* Modal Component */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModalFade;

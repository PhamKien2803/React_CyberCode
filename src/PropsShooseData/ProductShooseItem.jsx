import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from "axios";
import ProductShooseGetData from "./ProductShooseGetData";
import Modal from "react-bootstrap/Modal";
function ProductShooseItem() {
  const [shoose, setShoose] = useState([]);
  const [selectedShoose, setSelectedShoose] = useState(null);
  const [showModalFade, setShowModalFade] = useState(false);

  const handleClickView = (shoose) => {
    setSelectedShoose(shoose);
    setShowModalFade(true);
  };

  const handleClose = () => {
    setSelectedShoose(null);
    setShowModalFade(false);
  };

  const showModalFadeCarView = () => {
    return (
      selectedShoose && (
        <Modal show={showModalFade} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedShoose.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedShoose.image}
              alt={selectedShoose.name}
              style={{ width: "100%", height: "auto" }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Save</Button>
          </Modal.Footer>
        </Modal>
      )
    );
  };
  useEffect(() => {
    axios
      .get("/Shoose")
      .then((response) => setShoose(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ProductShooseGetData shooseModalFadeProps={handleClickView} propsProduct={shoose} />
      {showModalFadeCarView()}
    </div>
  );
}

export default ProductShooseItem;

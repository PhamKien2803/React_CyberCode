import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import PropsViewCar from "./PropsViewCar";

function ListCar() {
  const [products, setProducts] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, []);

  //Hàm xử lý sự kiện khi nhấn nút để view
  const handleClickView = (key) => {
    setSelectedCar(key);
    setShowModal(true);
  };

  //Hàm xử lý sự kiến khi ấn nút để đóng
  const handleCloseView = () => {
    setSelectedCar(null);
    setShowModal(false);
  };

  const renderDataCar = () => {
    return products.map((pro) => (
        
      <Col key={pro?.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={pro?.img} />
          <Card.Body>
            <Card.Title>{pro?.name}</Card.Title>
            <Card.Text>{pro?.price} VND</Card.Text>
            <Button
              onClick={() => handleClickView(pro)}
              variant="success"
              block
            >
              Xem chi tiết
            </Button>
          </Card.Body>
        </Card>
        {/* nãy chuyền hàm "showModalFadeCarView" là sai vì nó chỉ là hàm hiện ra cái khung đó 
        còn đây là khi ấn vào nút thì mới hiện ra thì phải gọi đến handleClickView (Phải có suy nghĩa chiều sâu) */}
        {/* <PropsViewCar modalFadeProps={handleClickView} carProps={pro}/> */}
      </Col>
    ));
  };

  //Hàm hiển thì ra form ModalFade
  const showModalFadeCarView = () => {
    return (
      selectedCar && (
        <Modal show={showModal} onHide={handleCloseView} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCar.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedCar.img}
              alt={selectedCar.name}
              style={{ width: "100%", height: "auto" }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseView}>
              Close
            </Button>
            <Button variant="primary">Save</Button>
          </Modal.Footer>
        </Modal>
      )
    );
  };

  return (
    <div>
      <Container>
        <Row>
          <h1>Danh sách xe</h1>
        </Row>
        <Row>{renderDataCar()}</Row>
        {showModalFadeCarView()}
      </Container>
    </div>
  );
}

export default ListCar;

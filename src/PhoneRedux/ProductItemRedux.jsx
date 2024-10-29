import React, { useState } from "react";
import { Button, Card, Col, Image, Row, Table, Modal } from "react-bootstrap";
import { connect } from "react-redux";

function ProductItemRedux({ phoneProps, addtoCart, viewDetails }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleViewDetails = () => {
    viewDetails(phoneProps);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    viewDetails(null)
    setShowDetails(false);
  };

  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={phoneProps?.hinhAnh} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {phoneProps?.tenSP}
          </Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            {phoneProps?.giaBan} VND
          </Card.Text>
          <div style={{ alignItems: "center", marginLeft: "18%" }}>
            <Button
              onClick={handleViewDetails}
              variant="success"
              block
            >
              Xem chi tiết
            </Button>

            <Button
              style={{ marginLeft: "3%" }}
              onClick={() => addtoCart(phoneProps)}
              variant="danger"
              block
            >
              Thêm giỏ hàng
              <i
                style={{ fontSize: "20px", marginLeft: "8px" }}
                className="fa fa-shopping-cart"
              ></i>
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showDetails} onHide={handleCloseDetails} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{phoneProps?.tenSP}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={4}>
              <Image src={phoneProps?.hinhAnh} alt={phoneProps?.tenSP} fluid />
            </Col>
            <Col md={8}>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <th>Tên sản phẩm</th>
                    <td>{phoneProps?.tenSP}</td>
                  </tr>
                  <tr>
                    <th>Giá bán</th>
                    <td>{phoneProps?.giaBan} VND</td>
                  </tr>
                  <tr>
                    <th>Màn hình</th>
                    <td>{phoneProps?.manHinh}</td>
                  </tr>
                  <tr>
                    <th>Hệ điều hành</th>
                    <td>{phoneProps?.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <th>Camera trước</th>
                    <td>{phoneProps?.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <th>Camera sau</th>
                    <td>{phoneProps?.cameraSau}</td>
                  </tr>
                  <tr>
                    <th>RAM</th>
                    <td>{phoneProps?.ram}</td>
                  </tr>
                  <tr>
                    <th>Bộ nhớ trong</th>
                    <td>{phoneProps?.rom}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}

const setProductStore = (dispatch) => {
  return {
    addtoCart: (products) => {
      let phoneProuct = {
        maSP: products?.maSP,
        tenSP: products?.tenSP,
        manHinh: products?.manHinh,
        heDieuHanh: products?.heDieuHanh,
        cameraTruoc: products?.cameraTruoc,
        cameraSau: products?.cameraSau,
        ram: products?.ram,
        rom: products?.rom,
        giaBan: products?.giaBan,
        hinhAnh: products?.hinhAnh,
        quantity: products?.quantity,
      };
      console.log("Data", phoneProuct);

      let action = {
        type: "Add_To_Cart", //thuộc tính bắt buộc của action
        phoneProuct,
      };
      dispatch(action);
    },
    viewDetails: (viewMaSp) => {
      let action = {
        type: "View_Details",
        payload: viewMaSp,
      };
      dispatch(action);
      console.log(viewMaSp);
    },
  };
};

export default connect(null, setProductStore)(ProductItemRedux);

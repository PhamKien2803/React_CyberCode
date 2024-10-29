import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Table,
  Button,
  Image,
  Modal,
} from "react-bootstrap";
import axios from "axios";
import DetailsPhone from "./DetailsPhone";

function ListPhone() {
  const [phoneList, setPhoneList] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);

  const [selectedPhoneAddtoCart, setSelectedPhoneAddtoCart] = useState(null);
  const [showModalCart, setShowModalCart] = useState(false);
  const [cart, setCart] = useState([]);

  const [checkbox, setCheckBox] = useState([]);

  useEffect(() => {
    axios
      .get("/phone")
      .then((response) => setPhoneList(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClickView = (phone) => {
    setSelectedPhone(phone);
  };

  const handleClickViewModal = (phones) => {
    setSelectedPhoneAddtoCart(phones);
    setShowModalCart(true);
  };

  const handleCloseViewModal = () => {
    setSelectedPhoneAddtoCart(null);
    setShowModalCart(false);
  };

  const handleCheckBox = (maSP) => {
    if (checkbox.includes(maSP)) {
      setCheckBox(checkbox.filter((id) => id !== maSP));
    } else {
      setCheckBox([...checkbox, maSP]);
    }
  };

  const handleFilterProduct = () => {
    return phoneList.filter((phone) => checkbox.includes(phone?.maSP));
  };


  const handleAddToCart = (products) => {
    const existProdcuts = cart.find((item) => item?.maSP === products?.maSP);
    if (existProdcuts) {
      setCart(
        cart.map((items) =>
          items?.maSP === products?.maSP
            ? { ...items, quantity: items?.quantity + 1 }
            : items
        )
      );
    }else{
      setCart([...cart, {...products, quantity: 1}])
    }
  };

  const getTotalItemsInCart = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleDeleteProducts = (productsDelete) => {
    setCart(cart.filter((items) => items?.maSP !== productsDelete?.maSP));
  };

  const ASCProducts = (maSP) => {
    setCart(
      cart.map((item) =>
        item?.maSP === maSP ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const DESCProducts = (maSP) => {
    setCart(
      cart.map((items) =>
        items?.maSP === maSP && items?.quantity >= 1
          ? { ...items, quantity: items?.quantity - 1 }
          : items
      )
    );
  };

  const showModalAddtoCartPhone = () => {
    return (
      selectedPhoneAddtoCart && (
        <Modal
          show={showModalCart}
          onHide={handleCloseViewModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Giỏ hàng
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table>
              <thead>
                <th>Mã sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
              </thead>

              <tbody>
                {cart.map((item) => (
                  <tr key={item.maSP}>
                    <td>{item.maSP}</td>
                    <td>
                      <img
                        style={{ width: "40px" }}
                        src={item.hinhAnh}
                        alt={item.tenSP}
                      />
                    </td>
                    <td>{item.tenSP}</td>
                    <td>
                      <Button
                        onClick={() => ASCProducts(item?.maSP)}
                        style={{ marginRight: "5%" }}
                        variant="primary"
                      >
                        +
                      </Button>
                      <input
                        readOnly
                        value={item.quantity}
                        style={{ width: "30px", marginRight: "5%" }}
                        type="text"
                      ></input>
                      <Button
                        onClick={() => DESCProducts(item?.maSP)}
                        variant="primary"
                      >
                        -
                      </Button>
                    </td>
                    <td>{item.giaBan}</td>
                    <td>{item.giaBan * item.quantity}</td>
                    <Button
                      onClick={() => handleDeleteProducts(item)}
                      variant="danger"
                    >
                      Xóa
                    </Button>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseViewModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )
    );
  };

  const renderDataPhone = () => {
    return phoneList.map((phone) => (
      <Col key={phone.maSP} xs={12} sm={6} md={4} lg={4} className="mb-4">
        <DetailsPhone
          addtoCartProps={handleAddToCart}
          viewDetailsProps={handleClickView}
          phoneProps={phone}
        />
      </Col>
    ));
  };

  const renderDataDetails = () => {
    if (!selectedPhone) return null;

    return (
      <div>
        <h2>{selectedPhone.tenSP}</h2>
        <Row>
          <Col md={4}>
            <Image
              src={selectedPhone.hinhAnh}
              alt={selectedPhone.tenSP}
              fluid
            />
          </Col>
          <Col md={8}>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <th>Tên sản phẩm</th>
                  <td>{selectedPhone.tenSP}</td>
                </tr>
                <tr>
                  <th>Giá bán</th>
                  <td>{selectedPhone.giaBan} VND</td>
                </tr>
                <tr>
                  <th>Màn hình</th>
                  <td>{selectedPhone.manHinh}</td>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <td>{selectedPhone.heDieuHanh}</td>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <td>{selectedPhone.cameraTruoc}</td>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <td>{selectedPhone.cameraSau}</td>
                </tr>
                <tr>
                  <th>RAM</th>
                  <td>{selectedPhone.ram}</td>
                </tr>
                <tr>
                  <th>Bộ nhớ trong</th>
                  <td>{selectedPhone.rom}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <div>
      <Container>
        <h1 style={{ textAlign: "center" }}>Danh sách sản phẩm</h1>
        <span
          onClick={handleClickViewModal} // Call handleShow when span is clicked
          style={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
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
            ({getTotalItemsInCart()})
          </h5>
        </span>
        <Row>{renderDataPhone()}</Row>
        {selectedPhone && renderDataDetails()}

        {showModalAddtoCartPhone()}
      </Container>
    </div>
  );
}

export default ListPhone;

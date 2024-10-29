import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";

function CartModalFadeRedux({
  cartProducts,
  deleteProduct,
  increaseQuantity,
  decreaseQuantity,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getTotalItemsInCart = () => {
    return cartProducts.reduce((total, item) => total + item?.quantity, 0);
  };

  return (
    <>
      <span
        onClick={handleShow}
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

      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Giỏ Hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Mã Sản Phẩm</th>
                <th>Hình Ảnh</th>
                <th>Tên Sản Phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành Tiền</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((phone) => (
                <tr key={phone?.maSP}>
                  <td>{phone?.maSP}</td>
                  <td>
                    <img
                      src={phone?.hinhAnh}
                      alt={phone?.tenSP}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
                  <td>{phone?.tenSP}</td>
                  <td>{phone?.giaBan} VND</td>
                  <td>
                    <Button
                      onClick={() => decreaseQuantity(phone?.maSP)}
                      variant="outline-secondary"
                    >
                      -
                    </Button>
                    {phone?.quantity}
                    <Button
                      onClick={() => increaseQuantity(phone?.maSP)}
                      variant="outline-secondary"
                    >
                      +
                    </Button>
                  </td>
                  <td>{phone?.giaBan * phone?.quantity} VND</td>
                  <td>
                    <Button
                      onClick={() => deleteProduct(phone?.maSP)}
                      variant="danger"
                    >
                      Xóa
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.stateCartPhone.phone,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (maSP) => {
      let action = {
        type: "Delete_Product",
        maSP,
      };
      dispatch(action);
      console.log(maSP);
    },

    increaseQuantity: (increaseProducts) => {
      let action = {
        type: "Increase_Quantity",
        increaseProducts,
      };
      dispatch(action);
      console.log(increaseProducts)
    },

    decreaseQuantity: (decreaseQuantity) => {
      let action = {
        type: "Decrease_Quantity",
        decreaseQuantity,
      };
      dispatch(action);
      console.log(decreaseQuantity)
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModalFadeRedux);

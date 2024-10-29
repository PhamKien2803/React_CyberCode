import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Modal,
  Form,
} from "react-bootstrap";

import addtoCart from "./Images/icon-add-to-cart.svg";
import iconConfirm from "./Images/icon-order-confirmed.svg";
import emptyCard from "./Images/illustration-empty-cart.svg";

import waffle from "./Images/image-waffle-thumbnail.jpg";
import creme from "./Images/image-creme-brulee-thumbnail.jpg";
import macaron from "./Images/image-macaron-thumbnail.jpg";
import baklava from "./Images/image-baklava-thumbnail.jpg";
import pie from "./Images/image-meringue-thumbnail.jpg";
import tiramisu from "./Images/image-meringue-thumbnail.jpg";
import cake from "./Images/image-cake-thumbnail.jpg";
import brownie from "./Images/image-brownie-thumbnail.jpg";
import panna from "./Images/image-panna-cotta-thumbnail.jpg";


function ProductCartItemRedux({ products, cartItems, addToCart }) {
  const [showModal, setShowModal] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const cakeImage = {
    1: waffle,
    2: creme,
    3: macaron,
    4: tiramisu,
    5: baklava,
    6: pie,
    7: cake,
    8: brownie,
    9: panna,
  };

  // Calculate total amount when cart items change
  useEffect(() => {
    let total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
    setTotalAmount(total);
  }, [cartItems]);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  // Render products list
  const renderProducts = () => {
    return products.map((item, index) => (
      <Col xs={12} sm={6} md={4} key={index}>
        <Card className="h-100 shadow-md">
          <Image className="card-img-top" src={cakeImage[item.id]} alt={item.category} fluid />
          <Card.Body className="d-flex flex-column">
            <Button
              variant="light"
              className="d-flex align-items-center justify-content-center mb-2"
              onClick={() => handleAddToCart(item)} // Add product to cart
            >
              <Image src={addtoCart} alt="Add to Cart" className="me-2" />
              Add to Cart
            </Button>
            <Card.Text className="mt-4 text-sm text-rose-500 font-semibold">{item.category}</Card.Text>
            <Card.Title className="text-lg font-semibold">{item.name}</Card.Title>
            <Card.Subtitle className="text-red-500 mt-1">{item.price} $</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  // Render cart summary
  const renderCartSummary = () => {
    return (
      <Card className="p-5 bg-white shadow-md">
        <Card.Title className="text-xl text-red-500">
          Your Cart ({cartItems.length})
        </Card.Title>
        {cartItems.length === 0 ? (
          <div className="empty-content text-center">
            <Image src={emptyCard} alt="Empty cart illustration" className="mx-auto mb-2" />
            <p className="empty-message text-sm text-rose-500">Your added items will appear here</p>
          </div>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div key={index} className="d-flex justify-content-between">
                <span>{item.name}</span>
                <span>
                  {item.quantity} x {item.price} $
                </span>
              </div>
            ))}
            <div className="total-div d-flex justify-content-between mt-3">
              <p>Order Total</p>
              <p className="cart-total text-lg font-bold">${totalAmount.toFixed(2)}</p>
            </div>
            <Button className="w-100 mt-2" variant="danger" onClick={() => setShowModal(true)}>
              Confirm order
            </Button>
          </>
        )}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Order Confirmed</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image style={{ marginLeft: "5rem", marginBottom: "2rem" }} src={iconConfirm} alt="Order confirmed icon" />
              <p className="text-center text-rose-300">We hope you enjoy your food!</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" className="w-100" onClick={() => setShowModal(false)}>
                Start new order
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </Card>
    );
  };

  return (
    <Container fluid className="p-5 min-vh-100 bg-rose-50 font-sans">
      <Row>
        <Col md={8}>
          <h1 className="text-2xl font-bold">Desserts</h1>
          <Row>
            <Form.Control type="text" placeholder="Enter project name to search" className="mb-3" />
          </Row>
          <Row className="g-4 mt-4">{renderProducts()}</Row>
        </Col>
        <Col md={4} className="ml-4">
          {renderCartSummary()}
        </Col>
      </Row>
    </Container>
  );
}

// Map Redux state to component props
const mapStateToProps = (state) => ({
  products: state.productListReducer.product,
  cartItems: state.cartReducer.cartItems,
});

// Map Redux dispatch to component props
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCartItemRedux);

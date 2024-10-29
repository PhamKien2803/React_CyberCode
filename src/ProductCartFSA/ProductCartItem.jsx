import React, { useState, useEffect } from "react";
import axios from "axios";
import emptyCard from "./Images/illustration-empty-cart.svg";
import addtoCart from "./Images/icon-add-to-cart.svg";
import iconConfirm from "./Images/icon-order-confirmed.svg";

import waffle from "./Images/image-waffle-thumbnail.jpg";
import creme from "./Images/image-creme-brulee-thumbnail.jpg";
import macaron from "./Images/image-macaron-thumbnail.jpg";
import baklava from "./Images/image-baklava-thumbnail.jpg";
import pie from "./Images/image-meringue-thumbnail.jpg";
import tiramisu from "./Images/image-meringue-thumbnail.jpg";
import cake from "./Images/image-cake-thumbnail.jpg";
import brownie from "./Images/image-brownie-thumbnail.jpg";
import panna from "./Images/image-panna-cotta-thumbnail.jpg";

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

function ProductCartItem() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    axios
      .get("/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, []);

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

  const addToCart = (item) => {
    setCartItems((prevItem) => {
      //set lại giỏ hàng
      const newItems = { ...prevItem }; //tạo 1 sản phẩm mới đưa vào giỏ hàng = cách render lại data trước đó
      if (newItems[item.name]) {
        //nếu là item mới được thêm vào
        newItems[item.name].quantity += 1; //số lượng sẽ tăng lên 1
      } else {
        //không số lượng ban đầu mặc định là 1
        newItems[item.name] = { ...item, quantity: 1 };
      }
      //trả về sản phẩm mới khi được thêm vào
      return newItems;
    });
    //Cập nhật giỏ hàng và tổng giá tiền
    updateTotalAmount();
  };

  //Hàm cập nhật tổng giá tiền đơn hàng
  const updateTotalAmount = () => {
    setTotalAmount((prevTotal) =>
      Object.values(cartItems).reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      )
    );
  };

  //Hàm tăng số lượng
  // const increaseQuantity = (item) => {
  //   //lấy lại những thông tin sản phẩm đã được thêm
  //   const increaseQuantitys = { ...cartItems };
  //   //nhấn tăng thì số lượng sản phẩm sẽ tăng
  //   increaseQuantitys[item.name].quantity += 1;
  //   //set lại state khi tăng thành công để hiển thị thông tin mới
  //   setCartItems(increaseQuantitys);
  //   //Cập nhật lại giỏ hàng
  //   updateTotalAmount();
  // };

  const increaseQuantity = (item) => {
    const increaseItem = { ...cartItems };
    if (increaseItem[item.name]) {
      increaseItem[item.name].quantity += 1;
    } else {
      increaseItem[item.name] = { ...item, quantity: 1 };
    }
    setCartItems(increaseItem);
    updateTotalAmount();
  };

  const decreaseQuantity = (item) => {
    //lấy lại những thông tin sản phẩm đã được thêm
    const decreaseQuantitys = { ...cartItems };
    //Nếu như số lượng sản phẩm lớn hơn or bằng 1
    if (decreaseQuantitys[item.name].quantity >= 1) {
      //tiến hành click giảm số lượng sản phẩm
      decreaseQuantitys[item.name].quantity -= 1;
    } else {
      //nếu giảm số lượng hết mức thì sẽ xóa sản phẩm đó khỏi giỏ hàng
      delete decreaseQuantitys[item.name];
    }

    //Set lại state khi click giảm số lượng
    setCartItems(decreaseQuantitys);
    //Cập nhật lại thông tin giỏ hàng
    updateTotalAmount();
  };

  const confirmOrder = () => {
    // Xử lý xác nhận đơn hàng (có thể gửi dữ liệu lên server)
    setShowModal(true);
    // Reset giỏ hàng
    setCartItems({});
    setTotalAmount(0);
  };

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
    console.log(searchItem);
  };

  const searchProduct = () => {
    return products.filter((product) => {
      const matchesSearch =
        searchItem === "" ||
        product.name.toLowerCase().includes(searchItem.toLowerCase());

        return matchesSearch;
    });
  };

  const renderProductsItem = () => {
    const filterProductSearch = searchProduct();
    return filterProductSearch.map((item, index) => (
      <Col xs={12} sm={6} md={4} key={index}>
        <Card className="h-100 shadow-md">
          <Image
            className="card-img-top"
            src={cakeImage[item.id]}
            alt={item.category}
            fluid
          />
          <Card.Body className="d-flex flex-column">
            {/* Nếu Click vào nút addToCart thì sẽ chuyển sang nút tăng giảm số lượng */}
            {cartItems[item.name] ? (
              <div className="d-flex align-items-center justify-content-between">
                <Button variant="danger" onClick={() => decreaseQuantity(item)}>
                  -
                </Button>
                <span>{cartItems[item.name].quantity}</span>
                <Button variant="danger" onClick={() => increaseQuantity(item)}>
                  +
                </Button>
              </div>
            ) : (
              // còn không thì sẽ trả lại về nút addToCart ban đầu
              <Button
                variant="light"
                className="d-flex align-items-center justify-content-center mb-2"
                onClick={() => addToCart(item)}
              >
                <Image src={addtoCart} alt="Add to Cart" className="me-2" />
                Add to Cart
              </Button>
            )}
            <Card.Text className="mt-4 text-sm text-rose-500 font-semibold">
              {item.category}
            </Card.Text>
            <Card.Title className="text-lg font-semibold">
              {item.name}
            </Card.Title>
            <Card.Subtitle className="text-red-500 mt-1">
              {item.price} $
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  const renderCartSumary = () => {
    return (
      <Card className="p-5 bg-white shadow-md">
        <Card.Title className="text-xl text-red-500">
          Your Cart ({Object.keys(cartItems).length})
        </Card.Title>
        {Object.keys(cartItems).length === 0 ? (
          <div className="empty-content text-center">
            <Image
              src={emptyCard}
              alt="Empty cart illustration"
              className="mx-auto mb-2"
            />
            <p className="empty-message text-sm text-rose-500">
              Your added items will appear here
            </p>
          </div>
        ) : (
          <div>
            {Object.values(cartItems).map((item, index) => (
              <div key={index} className="d-flex justify-content-between">
                <span>{item.name}</span>
                <span>
                  {item.quantity} x {item.price} $
                </span>
              </div>
            ))}
            <div className="total-div d-flex justify-content-between mt-3">
              <p>Order Total</p>
              <p className="cart-total text-lg font-bold">
                ${totalAmount.toFixed(2)}
              </p>
            </div>
            <Button
              className="w-100 mt-2"
              variant="danger"
              onClick={confirmOrder}
            >
              Confirm order
            </Button>
          </div>
        )}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Order Confirmed</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image
                style={{ marginLeft: "5rem", marginBottom: "2rem" }}
                src={iconConfirm}
                alt="Order confirmed icon"
              />
              <p className="text-center text-rose-300">
                We hope you enjoy your food!
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="danger"
                className="w-100"
                onClick={() => setShowModal(false)}
              >
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
            <Form.Control
              type="text"
              placeholder="Enter project name to search"
              value={searchItem}
              onChange={handleSearch}
              className="mb-3"
            />
          </Row>
          <Row className="g-4 mt-4">{renderProductsItem()}</Row>
        </Col>
        <Col md={4} className="ml-4">
          {renderCartSumary()}
        </Col>
      </Row>
    </Container>
  );
}

export default ProductCartItem;

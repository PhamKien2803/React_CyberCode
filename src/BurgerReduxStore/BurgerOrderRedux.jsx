import React from "react";
import "./CSS/burger.css";
import { Col, Container, Row, Table } from "react-bootstrap";
import { connect } from "react-redux";
function BurgerOrderRedux({ burgers, menus,totals, increaseQuantity, decreaseQuantity }) {
  const burgerMid = () => {
    //Dùng for in
    let content = [];
    for (let propBurge in burgers) {
      let burgerMiddle = [];
      for (let i = 0; i < burgers[propBurge]; i++) {
        burgerMiddle.push(<div key={i} className={propBurge}></div>);
      }
      content.push(burgerMiddle);
    }
    return content;

    //Dùng object
    // return Object.entries(burgers).map(([propsBurger, value], index) => {
    //   let burgerMid = [];
    //   for (let i = 0; i < value; i++) {
    //     burgerMid.push(<div key={index} className={propsBurger}></div>);
    //   }
    //   return burgerMid;
    // });
  };

  const orderFood = () => {
    return (
      <Table striped hover>
        <thead>
          <tr>
            <td>Fool</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Total</td>
          </tr>
        </thead>

        <tbody>
          {Object.entries(menus).map(([propMenu, price], index) => (
            <tr key={index}>
              <td>{propMenu}</td>
              <td>
                <button onClick={() => decreaseQuantity(propMenu)} style={{ backgroundColor: "red" }}>
                  -
                </button>
                {burgers[propMenu]}
                <button onClick={() =>  increaseQuantity(propMenu)} style={{ backgroundColor: "green" }}>
                  +
                </button>
              </td>
              <td>{price}</td>
              <td>{burgers[propMenu] * price}</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={2}></td>
            <td>Total Price</td>
            <td>{totals}</td>
          </tr>
        </tfoot>
      </Table>
    );
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              <h1 style={{ textAlign: "center", color: "green" }}>
                BURGER ORDER SHOPPING
              </h1>
              <h1 style={{ textAlign: "center", color: "red" }}>YOUR BURGER</h1>
            </Row>
            <div className="breadTop"></div>
            {burgerMid()}
            <div className="breadBottom"></div>
          </Col>

          <Col md={2}>
            <Row>
              <h2
                className="mt-4"
                style={{
                  textAlign: "center",
                  color: "purple",
                  fontSize: "30px",
                }}
              >
                CHOOSE YOUR FOOD
              </h2>
            </Row>
            {orderFood()}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const burgerMapToProps = (state) => {
  return {
    burgers: state.stateBurgerOrder.burger,
    menus: state.stateBurgerOrder.menu,
    totals: state.stateBurgerOrder.total,
  };
};

const burgerDispatch = (dispatch) => {
  return {
    increaseQuantity: (increaseBurger) => {
      dispatch({
        type: "INCREASE_BURGER",
        payload: increaseBurger,
      });
    },

    decreaseQuantity: (decreaseBurger) => {
      dispatch({
        type: "DECREASE_BURGER",
        payload: decreaseBurger,
      });
    },
  };
};

export default connect(burgerMapToProps, burgerDispatch)(BurgerOrderRedux);

import React, { useReducer } from "react";
import { Button } from "react-bootstrap";

// Khởi tạo giỏ hàng rỗng
const initialCart = [];

// Định nghĩa các loại hành động
const ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  DELETE_PRODUCT: "DELETE_PRODUCT",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
};

// Reducer quản lý giỏ hàng
const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART: {
      const existingProduct = state.find(item => item.id === action.payload.id);
      if (existingProduct) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case ACTIONS.DELETE_PRODUCT: {
      return state.filter(item => item.id !== action.payload);
    }

    case ACTIONS.INCREASE_QUANTITY: {
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    case ACTIONS.DECREASE_QUANTITY: {
      return state
        .map(item =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0); // Loại bỏ sản phẩm nếu số lượng bằng 0
    }

    default:
      return state;
  }
};

// Danh sách sản phẩm
const arrayProduct = [
  {
    id: 1,
    name: "iPhone 12",
    price: 1000,
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 900,
  },
  {
    id: 3,
    name: "Google Pixel 6",
    price: 800,
  },
];

export default function DemoUseReducer() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const addToCart = product => dispatch({ type: ACTIONS.ADD_TO_CART, payload: product });
  const handleDelete = id => dispatch({ type: ACTIONS.DELETE_PRODUCT, payload: id });
  const decreaseQuantity = id => dispatch({ type: ACTIONS.DECREASE_QUANTITY, payload: id });
  const increaseQuantity = id => dispatch({ type: ACTIONS.INCREASE_QUANTITY, payload: id });

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container">
      <div className="row">
        {arrayProduct.map(item => (
          <div className="col-4" key={item.id}>
            <div className="card text-left mb-4">
              <img
                className="card-img-top"
                src={`https://picsum.photos/200/200?random=${item.id}`}
                alt={item.name}
              />
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">${item.price}</p>
                <Button variant="success" onClick={() => addToCart(item)}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3>Giỏ hàng</h3>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Tổng tiền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    onClick={() => decreaseQuantity(product.id)}
                  >
                    -
                  </Button>{" "}
                  {product.quantity}{" "}
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    onClick={() => increaseQuantity(product.id)}
                  >
                    +
                  </Button>
                </td>
                <td>${product.price * product.quantity}</td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(product.id)}>
                    X
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="4" className="text-right font-weight-bold">
                Tổng:
              </td>
              <td colSpan="2" className="font-weight-bold">
                ${totalAmount}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

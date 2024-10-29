import React, { useReducer } from "react";
import { Button } from "react-bootstrap";

const initialCart = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let cardUpdate = [...state]; // Sao chép trạng thái hiện tại
      let index = cardUpdate.findIndex(
        (item) => item?.id === action.payload?.id
      );

      if (index !== -1) {
        // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
        cardUpdate[index] = {
          ...cardUpdate[index], // giữ lại các thuộc tính khác
          quantity: cardUpdate[index].quantity + 1,
        };
      } else {
        // Nếu sản phẩm chưa có, thêm sản phẩm vào giỏ hàng
        cardUpdate.push({
          ...action.payload, // giữ lại các thuộc tính của sản phẩm
          quantity: 1, // bắt đầu với số lượng là 1
        });
      }

      return cardUpdate; // Trả về mảng mới
    }

    case "DELETE_PRODUCT": {
      let cardUpdate = [...state];
      // Tìm index của sản phẩm dựa trên id
      let index = cardUpdate.findIndex((item) => item?.id === action.payload);
      if (index !== -1) {
        // Xóa sản phẩm khỏi mảng
        cardUpdate.splice(index, 1);
      }

      return cardUpdate; // Trả về mảng mới sau khi xóa
    }

    case "INCREASE_QUANTITY": {
      let increase = state.map((item) => {
        if (item?.id === action.payload) {
          return { ...item, quantity: item?.quantity + 1 };
        } else {
          return item;
        }
      });
      return increase;
    }

    case "DECREASE_QUANTITY": {
      let decrease = state.map((item) => {
        if (item?.id === action.payload && item?.quantity >= 1) {
          return { ...item, quantity: item?.quantity - 1 };
        } else {
          return item;
        }
      });
      return decrease;
    }

    default:
      return state;
  }
};

const arrayProduct = [
  {
    id: 1,
    name: "iPhone 12",
    price: 1000,
    quantity: 1,
  },
  {
    id: 2,
    name: "iPhone 12",
    price: 1000,
    quantity: 1,
  },
  {
    id: 3,
    name: "iPhone 12",
    price: 1000,
    quantity: 1,
  },
];

export default function DemoUseReducer() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_PRODUCT",
      payload: id,
    });
  };

  const decreaseQuantity = (desc) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: desc,
    });
  };

  const increaseQuantity = (inc) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: inc,
    });
  };

  return (
    <div className="container">
      <div className="row">
        {arrayProduct.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card text-left">
                <img
                  className="card-img-top"
                  src={"https://picsum.photos/200/200"}
                  alt={index}
                />
                <div className="card-body">
                  <h4 className="card-title">{item.name}</h4>
                  <p className="card-text">{item.price}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h3>Giỏ hàng</h3>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <Button
                    style={{ marginRight: "1rem" }}
                    onClick={() => decreaseQuantity(product?.id)}
                    variant="outline-secondary"
                  >
                    -
                  </Button>
                  {product?.quantity}
                  <Button
                    style={{ marginLeft: "1rem" }}
                    onClick={() => increaseQuantity(product?.id)}
                    variant="outline-secondary"
                  >
                    +
                  </Button>
                </td>
                <td>{product.quantity * product.price}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(product?.id);
                    }}
                    className="btn btn-danger"
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

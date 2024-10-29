import React, { useContext } from "react";
import { StoreContext } from "./Store";
import { Button } from "react-bootstrap";

function CardProductHooks() {
  const [state, dispatch] = useContext(StoreContext);

  const productDispatch = {
    addToCart: (product) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    },

    handleDelete: (id) => {
      dispatch({
        type: "DELETE_PRODUCT",
        payload: id,
      });
    },

    decreaseQuantity: (id) => {
      dispatch({
        type: "DECREASE_QUANTITY",
        payload: id,
      });
    },

    increaseQuantity: (id) => {
      dispatch({
        type: "INCREASE_QUANTITY",
        payload: id,
      });
    },
  };
  return (
    <div className="container">
      <div className="row">
        {state.arrayProduct.map((item, index) => {
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
                    onClick={() => productDispatch.addToCart(item)}
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
          {state.cart.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <Button
                    style={{ marginRight: "1rem" }}
                    onClick={() =>
                      productDispatch.decreaseQuantity(product?.id)
                    }
                    variant="outline-secondary"
                  >
                    -
                  </Button>
                  {product?.quantity}
                  <Button
                    style={{ marginLeft: "1rem" }}
                    onClick={() =>
                      productDispatch.increaseQuantity(product?.id)
                    }
                    variant="outline-secondary"
                  >
                    +
                  </Button>
                </td>
                <td>{product.quantity * product.price}</td>
                <td>
                  <button
                    onClick={() => productDispatch.handleDelete(product?.id)}
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

export default CardProductHooks;

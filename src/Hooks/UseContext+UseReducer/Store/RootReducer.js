// reducer.js
const initialState = {
  arrayProduct: [
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
  ],
  cart: [], // Giỏ hàng ban đầu là một mảng rỗng
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );

      let updatedCart;

      if (existingProductIndex !== -1) {
        // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
        updatedCart = state.cart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Nếu sản phẩm chưa có, thêm sản phẩm vào giỏ hàng
        updatedCart = [...state.cart, { ...product, quantity: 1 }];
      }

      return { ...state, cart: updatedCart };
    }

    case "DELETE_PRODUCT": {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cart: updatedCart };
    }

    case "INCREASE_QUANTITY": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { ...state, cart: updatedCart };
    }

    case "DECREASE_QUANTITY": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return { ...state, cart: updatedCart };
    }

    default:
      return state;
  }
}

export { initialState };
export default reducer;

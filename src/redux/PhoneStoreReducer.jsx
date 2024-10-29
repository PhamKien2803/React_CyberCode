const stateCart = {
  phone: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
      quantity: 0, // Initialize with 0 quantity
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
      quantity: 0, // Initialize with 0 quantity
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
      quantity: 0, // Initialize with 0 quantity
    },
  ],
};

const cartReducer = (state = stateCart, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      {
        let index = state.phone.findIndex(
          (item) => item.maSP === action.phoneProuct?.maSP
        );
        if (index !== -1) {
          state.phone[index].quantity += 1;
        } else {
          state.phone.push(action.phoneProuct);
        }
        state.phone = [...state.phone];

        return { ...state };
      }

    case "Delete_Product":
      {
        let updateProduct = [...state.phone];
        let index = updateProduct.findIndex(
          (product) => product.maSP === action.maSP
        );

        if (index !== -1) {
          updateProduct.splice(index, 1);
        }

        return { ...state, phone: updateProduct };
      }

    case "Increase_Quantity":
      {
        let increases = state.phone.map((item) =>
          item.maSP === action.increaseProducts
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, phone: increases };
      }

    case "Decrease_Quantity":
      {
        let decrease = state.phone.map((product) =>
          product.maSP === action.decreaseQuantity && product.quantity >= 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
        return { ...state, phone: decrease };
      }

    case "View_Details":
      {
        const selectedPhone = action.payload;
        return {
          ...state,
          selectedPhone: selectedPhone,
        };
      }

    default:
      return { ...state };
  }
};

export default cartReducer;

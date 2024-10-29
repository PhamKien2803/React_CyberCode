const stateDefaultMovie = {
  danhSachGheDaDat: [
    {
      soGhe: "A1",
      gia: 75000,
      daDat: false,
    },
  ],
};

// Hàm reducer để quản lý trạng thái đặt vé xem phim
const ticketMovieReducer = (state = stateDefaultMovie, action) => {
  switch (action.type) {
    case "DAT_GHE": {
      // Xử lý việc chọn/bỏ chọn ghế
      let ghe = action.ghe;
      let danhSachGheDaDat = [...state.danhSachGheDaDat];
      
      // Kiểm tra xem ghế đã có trong danh sách chưa
      const index = danhSachGheDaDat.findIndex(
        (item) => item?.soGhe === ghe?.soGhe
      );
      
      if (index !== -1) {
        // Nếu ghế đã có, xóa nó khỏi danh sách (bỏ chọn)
        danhSachGheDaDat.splice(index, 1);
      } else {
        // Nếu ghế chưa có, thêm vào danh sách (chọn)
        danhSachGheDaDat.push(ghe);
      }
      
      // Trả về trạng thái mới với danh sách ghế đã cập nhật
      return { ...state, danhSachGheDaDat };
    }

    case "DELETE_SEAT": {
      // Xử lý việc xóa ghế khỏi danh sách
      let ghe = action.deleteseat;
      let danhSachGheDaDat = [...state.danhSachGheDaDat];
      
      // Tìm ghế trong danh sách
      const index = danhSachGheDaDat.findIndex(
        (item) => item?.soGhe === ghe?.soGhe
      );
      
      if (index !== -1) {
        // Nếu tìm thấy ghế, xóa nó khỏi danh sách
        danhSachGheDaDat.splice(index, 1);
      }
      
      // Trả về trạng thái mới với danh sách ghế đã cập nhật
      return { ...state, danhSachGheDaDat };
    }

    case "PAYEMENT_SEAT": {
      // Xử lý việc thanh toán ghế
      // Đánh dấu tất cả các ghế đã chọn là đã thanh toán
      let danhSachGheDaDat = state.danhSachGheDaDat.map((ghe) => ({
        ...ghe,
        daDat: true,
      }));
      
      // Lọc ra các ghế đã thanh toán
      let danhSachGheDaThanhToan = danhSachGheDaDat.filter(
        (ghe) => ghe.daDat
      );
      
      // Trả về trạng thái mới với danh sách ghế đã thanh toán và ghế đã chọn đã cập nhật
      return {
        ...state,
        danhSachGheDaThanhToan: [
          ...(state.danhSachGheDaThanhToan || []),
          ...danhSachGheDaThanhToan,
        ],
        // Cập nhật trạng thái của ghế đã chọn, nhưng không xóa chúng
        danhSachGheDaDat: danhSachGheDaDat,
      };
    }
    
    default:
      // Nếu loại hành động không khớp với bất kỳ trường hợp nào, trả về trạng thái hiện tại
      return { ...state };
  }
};

export default ticketMovieReducer

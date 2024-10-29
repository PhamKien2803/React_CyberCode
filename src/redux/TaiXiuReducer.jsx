import dice1 from "../TaiXiuGame/Image/1.png";
import dice2 from "../TaiXiuGame/Image/2.png";
import dice3 from "../TaiXiuGame/Image/3.png";
import dice4 from "../TaiXiuGame/Image/4.png";
import dice5 from "../TaiXiuGame/Image/5.png";
import dice6 from "../TaiXiuGame/Image/6.png";

const stateDefault = {
  taiXiu: true, //True: là tài (từ 3->11), false là xỉu (12<)
  mangXucXac: [
    { ma: 6, hinhAnh: dice1 },
    { ma: 6, hinhAnh: dice1 },
    { ma: 6, hinhAnh: dice1 },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const taixiuReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      return {
        ...state,
        taiXiu: action.taixiuXucSac,
      };
    }

    case "PLAY_GAME": {
      //Tạo 1 mảng rỗng để lưu trữ 3 số ngẫu nhiên
      let arrayRandomNumber = [];
      //Tạo 3 số ngẫu nhiên
      for (let i = 0; i < 3; i++) {
        //Tạo 1 số ngẫu nhiên từ 1 đến 6
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        //Tạo 1 đối tượng xúc xắc với số ngẫu nhiên và hình ảnh tương ứng
        const randomXucSac = {
          ma: randomNumber,
          hinhAnh: [dice1, dice2, dice3, dice4, dice5, dice6][randomNumber - 1],
        };
        //Thêm đối tượng xúc xắc vào mảng
        arrayRandomNumber.push(randomXucSac);
      }
      //Tính tổng điểm của 3 số ngẫu nhiên
      const tongDiem = arrayRandomNumber.reduce(
        (sum, xucXac) => sum + xucXac.ma,
        0
      );
      //Kiểm tra tổng điểm có lớn hơn 11 hay không
      const taiXiu = tongDiem > 11;
      //Trả về trạng thái mới của state

      return {
        ...state,
        mangXucXac: arrayRandomNumber,
        taiXiu: taiXiu,

        soBanThang:
          //Nếu tổng điểm lớn hơn 11 thì tăng số bàn thắng lên 1, ngược lại thì giữ nguyên
          taiXiu === state.taiXiu ? state.soBanThang + 1 : state.soBanThang,
        tongSoBanChoi: state.tongSoBanChoi + 1,
      };
    }

    default:
      return { ...state };
  }
};

export default taixiuReducer;

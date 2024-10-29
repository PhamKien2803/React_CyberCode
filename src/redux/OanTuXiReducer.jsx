import keo from "../OanTuXiGame/Image/keo.png";
import bua from "../OanTuXiGame/Image/bua.png";
import bao from "../OanTuXiGame/Image/bao.png";

const stateDefaultGame = {
  mangDatCuoc: [
    {
      ma: "keo",
      hinhAnh: keo,
      datCuoc: false,
    },
    {
      ma: "bua",
      hinhAnh: bua,
      datCuoc: false,
    },
    {
      ma: "bao",
      hinhAnh: bao,
      datCuoc: true,
    },
  ],
  ketQua: "I'm iron man, i love you 3000 !!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "bao", hinhAnh: bao },
  playerChoice: { ma: "bao", hinhAnh: bao },
};

const oanTuXiReducer = (state = stateDefaultGame, action) => {
  switch (action.type) {
    case "OANTUXI_CLICK": {
      //Tạo mảng mới
      let arrayUpdate = [...state.mangDatCuoc];
      //Cập nhật lại mảng
      arrayUpdate = arrayUpdate.map((item) => {
        //Nếu người dùng chọn quân bất kì thì sẽ đặt cược
        if (item.ma === action.oanTuXiClick) {
          //Nếu đúng thì sẽ đặt cược
          return { ...item, datCuoc: true };
        }
        //Nếu không đúng thì sẽ không đặt cược
        return { ...item, datCuoc: false };
      });
      //Tìm lựa chọn của người dùng
      const playerChoice = arrayUpdate.find((item) => item.datCuoc);
      //Cập nhật lại state
      return {
        ...state,
        mangDatCuoc: arrayUpdate,
        playerChoice: playerChoice,
      };
    }

    case "PLAY_GAME_RANDOM": {
      //Tạo số ngẫu nhiên
      let numberRandom = Math.floor(Math.random() * 3);
      //Tìm lựa chọn của máy
      let datCuocRandom = state.mangDatCuoc[numberRandom];
      state.computer = { ...datCuocRandom };

      let ketQua = "";
      //So sánh lựa chọn của người dùng và máy
      if (datCuocRandom.ma === state.playerChoice.ma) {
        ketQua = "Bạn đã hòa";
        state.soBanChoi++;
      } else if (
        (state.playerChoice.ma === "keo" && datCuocRandom.ma === "bao") ||
        (state.playerChoice.ma === "bua" && datCuocRandom.ma === "keo") ||
        (state.playerChoice.ma === "bao" && datCuocRandom.ma === "bua")
      ) {
        ketQua = [...state.ketQua];
        state.soBanThang++;
        state.soBanChoi++;
      } else {
        ketQua = "Bạn thua sml";
        state.soBanChoi++;
      }

      return { ...state, ketQua };
    }
    default:
      return state;
  }
};

export default oanTuXiReducer;

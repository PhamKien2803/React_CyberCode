import ga from "../XBetGame/image/ga.png";
import bau from "../XBetGame/image/bau.png";
import ca from "../XBetGame/image/ca.png";
import nai from "../XBetGame/image/nai.png";
import cua from "../XBetGame/image/cua.png";
import tom from "../XBetGame/image/tom.png";

const initialState = {
  danhSachCuoc: [
    { ma: "ga", hinhAnh: ga, diemCuoc: 0 },
    { ma: "bau", hinhAnh: bau, diemCuoc: 0 },
    { ma: "ca", hinhAnh: ca, diemCuoc: 0 },
    { ma: "nai", hinhAnh: nai, diemCuoc: 0 },
    { ma: "cua", hinhAnh: cua, diemCuoc: 0 },
    { ma: "tom", hinhAnh: tom, diemCuoc: 0 },
  ],
  tongDiem: 1000,
  mangXucXac: [
    { ma: "nai", hinhAnh: nai },
    { ma: "cua", hinhAnh: cua },
    { ma: "tom", hinhAnh: tom },
  ],
};

const xbetGameState = (state = initialState, action) => {
  switch (action.type) {
    case "ASC_AND_DESC_SCORE": {
      // Create a copy of danhSachCuoc
      const danhSachDatCuocUpdate = [...state.danhSachCuoc];

      // Find the item index to update
      const index = danhSachDatCuocUpdate.findIndex(
        (item) => item?.ma === action?.payload?.ma
      );

      if (index !== -1) {
        // Handle score increment or decrement
        if (action.tangGiam && state.tongDiem > 0) {
          danhSachDatCuocUpdate[index].diemCuoc += 100;
          state.tongDiem -= 100;
        } else if (
          !action.tangGiam &&
          danhSachDatCuocUpdate[index].diemCuoc > 0
        ) {
          danhSachDatCuocUpdate[index].diemCuoc -= 100;
          state.tongDiem += 100;
        }
      }

      // Return the new state with updated danhSachCuoc and tongDiem
      return {
        ...state,
        danhSachCuoc: danhSachDatCuocUpdate,
        tongDiem: state.tongDiem,
      };
    }

    // Always return the current state in the default case
    default:
      return state;
  }
};

export default xbetGameState;

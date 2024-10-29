import React from "react";
import { connect } from "react-redux";

function SeatList({ hangGhe, soHangGhe, listGheDaDat, datGhe }) {
  const renderSeat = () => {
    return hangGhe.danhSachGhe.map((item, index) => {
      // Check if the seat is in listGheDaDat and marked as daDat
      let isReserved = listGheDaDat.some(ghe => ghe.soGhe === item.soGhe && ghe.daDat);
      
      let cssSeat = isReserved ? "gheDuocChon" : "ghe";

      let cssGheDangDat = "";
      if (listGheDaDat.some(ghe => ghe.soGhe === item.soGhe && !ghe.daDat)) {
        cssGheDangDat = "gheDangChon";
      }

      return (
        <button
          onClick={() => {datGhe(item)}}
          disabled={isReserved}
          className={`${cssSeat} ${cssGheDangDat}`.trim()}
          key={index}
        >
          {item.soGhe}
        </button>
      );
    });
  };

  const renderSeatRow = () => {
    if (soHangGhe === 0) {
      return hangGhe.danhSachGhe.map((item, index) => (
        <button key={index} className="rowNumber">
          {item.soGhe}
        </button>
      ));
    }
    return null;
  };

  return (
    <div className="d-flex align-items-center mb-3">
      <span className="firstChar">{hangGhe.hang}</span>
      {soHangGhe === 0 ? renderSeatRow() : renderSeat()}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listGheDaDat: state.stateMovieTicket.danhSachGheDaDat,
  };
};

const mapStateDipatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch({
        type: "DAT_GHE",
        ghe,
      });
      console.log(ghe)
    },
  };
};

export default connect(mapStateToProps, mapStateDipatchToProps)(SeatList);

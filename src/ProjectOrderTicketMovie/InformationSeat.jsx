import React, { useState, useEffect } from "react";
import fontText from "./font/Pony.ttf";
import { Button, Table } from "react-bootstrap";
import ModalFadePayment from "./ModalFadePayment";
import { connect } from "react-redux";

function InformationSeat({ informationSeat, deleteSeat}) {
  const [showModal, setShowModal] = useState(false);

  const applyFont = () => {
    const newStyle = document.createElement("style");
    newStyle.appendChild(
      document.createTextNode(`
          @font-face {
            font-family: 'fontGame';
            src: url(${fontText});
          }
        `)
    );
    document.head.appendChild(newStyle);
  };

  useEffect(() => {
    applyFont();
  }, []);
  return (
    <div className="mt-3">
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <button
          className="gheDuocChon"
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
        ></button>
        <span
          style={{ fontFamily: "fontGame", color: "white", fontSize: "20px" }}
        >
          ghế đã đặt
        </span>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <button
          className="gheDangChon"
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
        ></button>
        <span
          style={{ fontFamily: "fontGame", color: "white", fontSize: "20px" }}
        >
          ghế đang đặt
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          className="ghe"
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
        ></button>
        <span
          style={{ fontFamily: "fontGame", color: "white", fontSize: "20px" }}
        >
          ghế chưa đặt
        </span>
      </div>

      <Table striped className="mt-3">
        <thead>
          <tr className="text-light" style={{ fontSize: 25 }}>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {informationSeat.map((item, index) => (
            <tr key={index}>
              <th>{item?.soGhe}</th>
              <th>{item?.gia}</th>
              <th>
                <Button onClick={() => {deleteSeat(item)}} variant="danger">Delete</Button>
              </th>
            </tr>
          ))}
          <tr>
            <th colSpan="2">Tổng tiền:</th>
            {/* reduce trong js là phương thức dùng để tính tổng các phần tử trong mảng */}
            <th>{informationSeat.reduce((total, item) => total + item.gia, 0)} VND</th>
          </tr>
          <tr>
            <th colSpan="3">
              <Button onClick={() => setShowModal(true)} variant="success" block>Xác nhận đặt</Button>
            </th>
          </tr>
        </tbody>
      </Table>
      <ModalFadePayment show={showModal} onHide={() => setShowModal(false)} />
    </div>
  );
}

const mapSeatPropsToMap = (state) => {
  return {
    informationSeat: state.stateMovieTicket.danhSachGheDaDat,
  };
};

const deletePropsToMap = (dispatch) => {
  return{
    deleteSeat : (deleteseat) => {
      dispatch({
        type: "DELETE_SEAT",
        deleteseat
      })
      console.log(deleteseat)
    }
  }
}



export default connect(mapSeatPropsToMap, deletePropsToMap)(InformationSeat);

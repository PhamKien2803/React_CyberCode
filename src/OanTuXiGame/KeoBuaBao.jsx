import React from "react";
import { connect } from "react-redux";

function KeoBuaBao({ keoBuaBaoProps }) {
  return (
    <div style={{ marginTop: "3%" }}>
      {keoBuaBaoProps.map((item, index) => {
        let border = {};
        if (item.datCuoc) {
          border = { border: "3px solid orange" };
        }
        return (
          <button key={index} className="btnItem" style={border}>
            <img
              style={{
                width: 65,
                height: 60,
                backgroundColor: "white",
                cursor: "pointer",
                marginRight: "3%",
              }}
              src={item.hinhAnh}
              alt={item.ma}
            />
          </button>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    keoBuaBaoProps: state.stateOanTuXi.mangDatCuoc,
  };
};

export default connect(mapStateToProps)(KeoBuaBao);

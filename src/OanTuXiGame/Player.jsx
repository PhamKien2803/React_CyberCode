import React from "react";
import { connect } from "react-redux";

function Player({ keoBuaBaoProps, oanTuXi, playerChoice }) {
  return (
    <div style={{ textAlign: "center" }} className="player_game">
      <div className="the_think">
        <img
          style={{ transform: "rotate(120deg)", width: "130px" }}
          src={playerChoice ? playerChoice.hinhAnh : require("../OanTuXiGame/Image/keo.png")}
          alt={playerChoice ? playerChoice.ma : "Kéo"}
        />
      </div>
      <div className="speech-bubble"></div>
      <img
        style={{ width: "180px", height: "180px" }}
        src={require("../OanTuXiGame/Image/player.png")}
        alt="IronMan"
      />
      <div
        style={{ marginTop: "3%", display: "flex", justifyContent: "center" }}
      >
        {keoBuaBaoProps.map((item, index) => {
          let border = {};
          if (item.datCuoc) {
            border = { border: "3px solid orange" };
          }
          return (
            <button
              onClick={() => {oanTuXi(item.ma)}}
              key={index}
              className="btnItem"
              style={{ ...border, margin: "0 10px" }}
            >
              <img
                style={{
                  width: 65,
                  height: 60,
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
                src={item.hinhAnh}
                alt={item.ma}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    keoBuaBaoProps: state.stateOanTuXi.mangDatCuoc,
    playerChoice: state.stateOanTuXi.playerChoice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    oanTuXi: (oanTuXiClick) => {
      dispatch({
        type: "OANTUXI_CLICK",
        oanTuXiClick
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);

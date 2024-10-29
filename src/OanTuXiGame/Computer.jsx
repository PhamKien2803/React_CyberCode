import React from "react";
import { connect } from "react-redux";
function Computer({ computerProps }) {
  let keyframe = `@keyframes randomItem${Date.now()} {
    0% {top: -50px;}
    25% {top: 100px;}
    50% {top: -50px;}
    75% {top: 100px;}
    100% {top: 0;}
  }`;
  return (
    <div style={{ textAlign: "center" }} className="player_game">
      <style>{keyframe}</style>
      <div className="the_think">
        <img
          style={{
            transform: "rotate(150deg)",
            width: "130px",
            animation: `randomItem${Date.now()} 0.7s`,
            position: "relative",
            top: "0",
            left: "0",
            right: "0",
            margin: "auto",
          }}
          src={computerProps?.hinhAnh}
          alt={computerProps?.hinhAnh}
        />
      </div>
      <div className="speech-bubble"></div>
      <img
        style={{ width: "180px", height: "180px" }}
        src={require("../OanTuXiGame/Image/playerComputer.png")}
        alt="Thanos"
      />
    </div>
  );
}

const imageStateToProps = (state) => {
  return {
    computerProps: state.stateOanTuXi.computer,
  };
};

export default connect(imageStateToProps)(Computer);

import React from "react";
import XucXac from "./XucXac";
import { useSelector, useDispatch } from 'react-redux';

function DanhSachXucXac() {
  const dispatch = useDispatch();
  const xucXacReducer = useSelector((state) => state.XBetGameData.danhSachCuoc);
  console.log(xucXacReducer);
  return (
    <div style={{ marginLeft: "5rem" }} className="mt-5">
      <div
        className="bg-white position-relative"
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Center Image */}
        <div
          className="position-absolute"
          style={{
            top: "25%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <XucXac xucxacItem={xucXacReducer[0]} />
        </div>

        {/* Bottom Left Image */}
        <div
          className="position-absolute"
          style={{
            bottom: "15%",
            left: "25%",
            transform: "translate(-50%, 0)",
          }}
        >
          <XucXac xucxacItem={xucXacReducer[1]}/>
        </div>

        {/* Bottom Right Image */}
        <div
          className="position-absolute"
          style={{
            bottom: "15%",
            right: "25%",
            transform: "translate(50%, 0)",
          }}
        >
          <XucXac xucxacItem={xucXacReducer[2]}/>
        </div>
      </div>
      <div style={{ textAlign: "center", marginRight: "5.5rem" }}>
        <img
          style={{ width: 200, marginTop: "2rem", cursor: "pointer" }}
          src={require("./image/soc.png")}
          alt="soc"
          onClick={() => dispatch({
            type: "PLAY_GAME",
          })}
        />
      </div>
    </div>
  );
}

export default DanhSachXucXac;

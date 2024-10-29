import React, { useEffect } from "react";
import fontText from "./font/Pony.ttf";
import { connect } from "react-redux";

function InformationGame({ tongSoBanThang, taixiu, tongSoBanChoi }) {
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
    <div>
      <h2 style={{ fontFamily: "fontGame" }}>
        BẠN CHỌN: <span style={{ color: "red" }}>{taixiu ? 'TÀI' : 'XỈU'}</span>
      </h2>
      <h2 style={{ fontFamily: "fontGame" }}>
        BẠN THẮNG: <span style={{ color: "green" }}>{tongSoBanThang}</span>
      </h2>
      <h2 style={{ fontFamily: "fontGame" }}>
        TỔNG SỐ BÀN CHƠI: <span style={{ color: "blue" }}>{tongSoBanChoi}</span>
      </h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tongSoBanThang: state.stateTaiXiu.soBanThang,
    taixiu: state.stateTaiXiu.taiXiu,
    tongSoBanChoi: state.stateTaiXiu.tongSoBanChoi
  };
};

export default connect(mapStateToProps)(InformationGame);

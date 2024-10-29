import React, { useEffect } from "react";
import fontText from "./font/Pony.ttf";
import { connect } from "react-redux";
function InformationGame({sobanThangProps, sobanChoiProps}) {
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
      <h2 style={{ fontFamily: "fontGame", color: "#7eff7e" }}>
        Số bàn thắng <span style={{color: "yellow"}}>{sobanThangProps}</span>
      </h2>
      <h2 style={{ fontFamily: "fontGame", color: "#7eff7e" }}>
        Số bàn chơi: <span style={{color: "yellow"}}>{sobanChoiProps}</span>
      </h2>
    </div>
  );
}

const informationPropsToState = (state) => {
  return {
    sobanThangProps : state.stateOanTuXi.soBanThang,
    sobanChoiProps : state.stateOanTuXi.soBanChoi,
  }
}

export default connect(informationPropsToState)(InformationGame);

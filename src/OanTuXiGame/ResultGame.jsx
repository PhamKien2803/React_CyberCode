import React from "react";
import { connect } from "react-redux";
function ResultGame({resultProps}) {
  return (
    <div>
      <h1
        style={{
          marginTop: "5%",
          fontFamily: "fontGame",
          color: "yellow",
        }}
      >
        <span style={{fontSize: "30px"}}>
          {resultProps}
        </span>
      </h1>
    </div>
  );
}

const resultPropsToState = (state) => {
  return {
    resultProps: state.stateOanTuXi.ketQua,
  }
}

export default connect(resultPropsToState)(ResultGame);

import { Fragment } from "react";
import React from "react";

function XucXac(props) {
  let { xucxacItem } = props;
  return (
    <Fragment>
      <div className="scene">
        <div className="cube">
          <img
            className="ml-3 cube__face front"
            style={{ width: 50 }}
            src={xucxacItem?.hinhAnh}
            alt="anh"
          />

          <img
            className="ml-3 cube__face right"
            style={{ width: 50 }}
            src={require("./image/bau.png")}
            alt="anh"
          />
          <img
            className="ml-3 cube__face back"
            style={{ width: 50 }}
            src={require("./image/ga.png")}
            alt="anh"
          />
          <img
            className="ml-3 cube__face left"
            style={{ width: 50 }}
            src={require("./image/ca.png")}
            alt="anh"
          />
          <img
            className="ml-3 cube__face front"
            style={{ width: 50 }}
            src={require("./image/tom.png")}
            alt="anh"
          />
          <img
            className="ml-3 cube__face front"
            style={{ width: 50 }}
            src={require("./image/nai.png")}
            alt="anh"
          />
          <img
            className="ml-3 cube__face front"
            style={{ width: 50 }}
            src={require("./image/cua.png")}
            alt="anh"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default XucXac;

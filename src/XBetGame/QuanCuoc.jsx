import React from "react";
import { useDispatch } from "react-redux";

function QuanCuoc(props) {
  const dispatch = useDispatch();
  const { quancuoc } = props;
  return (
    <div className="mt-3 mb-3">
      <div style={{ marginLeft: "2rem" }}>
        <img src={quancuoc?.hinhAnh} alt="bau" style={{ width: 250 }} />

        <div
          className="bg-success mt-2 pb-2 text-center d-flex justify-content-center align-items-center"
          style={{ borderRadius: "10px", width: 250 }}
        >
          <button
            onClick={() => {
              dispatch({
                type: "ASC_AND_DESC_SCORE",
                payload: quancuoc,
                tangGiam: true,
              });
            }}
            className="btn btn-danger mr-3"
          >
            <i className="fa fa-plus"></i>
          </button>

          <span className="mx-3" style={{ color: "yellow", fontSize: 25 }}>
            {quancuoc?.diemCuoc}
          </span>

          <button
            onClick={() => {
              dispatch({
                type: "ASC_AND_DESC_SCORE",
                payload: quancuoc,
                tangGiam: false,
              });
            }}
            className="btn btn-danger ml-3"
          >
            <i className="fa fa-minus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuanCuoc;

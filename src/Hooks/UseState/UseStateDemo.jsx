import React, { useState } from "react";

function useStateDemo(props) {
  const [state, setState] = useState(0);

  const handleLike = () => {
    setState(state + 1);
  };

  return (
    <div className="container m-5">
      <div className="card text-left">
        <img
          style={{ height: 250, width: 250 }}
          className="card-img-top"
          src="https://picsum.photos/200/200"
          alt="picture"
        />
        <div className="card-body">
          <h4 className="card-title">Picture</h4>
          <p style={{ color: "red" }}> {state} ♥</p>
        </div>
      </div>

      <button className="btn btn-danger" onClick={() => {handleLike()}}>
        Like
      </button>
    </div>
  );
}

export default useStateDemo;

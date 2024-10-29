import React from "react";

function LikeProfile() {
  return (
    <div className="mt-5">
      <div className="card text-white bg-default text-dark" style={{width: 300}}>

        <div style={{border: "2px solid black"}} className="card-body">
          <button style={{color: "red"}} className="card-title">Like <i className="fa fa-heart"></i></button>
        </div>
      </div>
    </div>
  );
}

export default LikeProfile;

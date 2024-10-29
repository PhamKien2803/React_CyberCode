import React from "react";

function ModelProfile() {
  return (
    <div className="mt-5">
      <h3>Profile</h3>
      <div className="card text-white bg-dark" style={{ width: 300 }}>
        <img
          className="card-img-top"
          src={require('../Image/audiRS7.jpg')}
          alt="Xe Porches"
        />
        <div className="card-body">
          <h4 className="card-title">Name: Audi RS7 SportBack</h4>
          <p className="card-text">Audi RS7 SportBack: 2024</p>
          <span style={{color: "red"}}>
            <i className="fa fa-heart"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ModelProfile;

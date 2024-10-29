import React from "react";

function PropsViewCar({children}) {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>List of Cars</h1>
      {children.map((chil, index) => {
        return chil
      })}
    </div>
  );
}

export default PropsViewCar;

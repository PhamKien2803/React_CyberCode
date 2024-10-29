import React from "react";
import ListCar from "./ListCar";
import PropsViewCar from "./PropsViewCar";
import Header from './Header';

function DemoProps() {
  return (
    <div>
      <PropsViewCar>
        <Header/>
        <ListCar />
        <ListCar />
        <ListCar />
      </PropsViewCar>
    </div>
  );
}

export default DemoProps;

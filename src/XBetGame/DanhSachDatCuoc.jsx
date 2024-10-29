import React from "react";
import { Col, Row } from "react-bootstrap";
import QuanCuoc from "./QuanCuoc";
import { useSelector } from "react-redux";

function DanhSachDatCuoc(props) {
  const danhSachCuoc = useSelector(state => state.XBetGameData.danhSachCuoc)
  console.log(danhSachCuoc)

  const renderData = () => {
    return danhSachCuoc.map((item, index) => (
      <Col md={4} key={index}>
        <QuanCuoc quancuoc={item}/>
      </Col>
    ))
  }
  return (
    <>
      <Row className="mt-5">
        {renderData()}
      </Row>
    </>
  );
}



export default DanhSachDatCuoc;

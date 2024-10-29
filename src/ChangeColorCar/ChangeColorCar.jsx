import React, { useState, useEffect } from "react";
import { Col, Container, Row, Table, ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from "axios";

import Wheel1 from "../asset/Image/icon-wheel-1(1).jpg";
import Wheel2 from "../asset/Image/icon-wheel-2(1).jpg";
import Wheel3 from "../asset/Image/icon-wheel-3(1).jpg";

function ChangeColorCar() {
  const [carfeature, setCarFeature] = useState([]);
  const [wheel, setWheel] = useState([]);

  useEffect(() => {
    axios
      .get("/CarFeature")
      .then((response) => setCarFeature(response.data))
      .catch((err) => console.log(err));
    axios
      .get("/Wheel")
      .then((response) => setWheel(response.data))
      .catch((err) => console.log(err));
  }, []);

  //render loop
  // const renderDataLoop = () => {
  //   let productArray = [];
  //   //duyệt tất cả sản phầm
  //   for(let i = 0; i < productList.length; i++){
  //       //Lấy từng sản phầm một
  //       let listProduct = productList[i];
  //       let trJsx = (
  //           //return về dạng bảng
  //           <tr key={i}>
  //               <td>{listProduct?.id}</td>
  //               <td>{listProduct?.name}</td>
  //               <td>{listProduct?.price}</td>
  //               <td>
  //                   <img style={{width: "100px"}} src={listProduct?.image} alt=""></img>
  //               </td>
  //           </tr>
  //       )
  //       //Lấy xong data thì đầy vào mảng rỗng để lưu trữ
  //       productArray.push(trJsx)
  //   }
  //   // trả về mảng đó
  //   return productArray;
  // }

  //Set chọn màu mặc định
  const [selectedColor, setSelectedColor] = useState("black-car.jpg");

  //Xử lý sự kiện thay đổi khi Click Chuột vào ô Color
  const handleColorChange = (carId) => {
    //const car = productList.find((car) => car.id === carId);
    setSelectedColor(carId);
  };

  //Hàm Filter lọc theo màu được chọn (return về hình ảnh có màu tương ứng)
  const filterPictureColor = () => {
    if (selectedColor === "black-car.jpg") {
      return "d8d8d8";
    } else if (selectedColor === "red-car.jp") {
      return "d8d8d8";
    } else if (selectedColor === "silver-car.jpg") {
      return "d8d8d8";
    } else if (selectedColor === "steel-car.jpg") {
      return "d8d8d8";
    } else {
      return "white";
    }
  };

  const renderCarFeatureTable = () => {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Color</th>
            <th>Price</th>
            <th>Engine Type</th>
            <th>Displacement</th>
            <th>Horsepower (SA Net)</th>
            <th>Torque (SA Net)</th>
            <th>Redline</th>
          </tr>
        </thead>
        <tbody>
          {carfeature.map((car) => (
            <tr key={car?.id}>
              <td>{car?.color}</td>
              <td>{car?.price}</td>
              <td>{car?.engineType}</td>
              <td>{car?.displacement}</td>
              <td>{car?.horsepower}</td>
              <td>{car?.torque}</td>
              <td>{car?.redline}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  const wheelImage = {
    1: Wheel1,
    2: Wheel2,
    3: Wheel3,
  };

  const renderWheelCar = () => {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id Wheel</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {wheel.map((car) => (
            <tr key={car?.id}>
              <td>{car?.idWheel}</td>
              <td><img
                  src={wheelImage[car?.idWheel]}
                  alt={car?.title}
                  style={{ width: "100px", height: "auto" }}
                /></td>
              <td>{car?.title}</td>
              <td>{car?.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  return (
    <div>
      <Container fluid style={{ width: "85%" }}>
        <Row>
          <Col md={7}>
            <Card style={{ marginTop: "50px" }}>
              <Card.Img
                variant="top"
                src={require(`../asset/products/${selectedColor}`)}
              />
              <Card.Body>
                <Card.Text>Exterior color</Card.Text>
              </Card.Body>
            </Card>

            <h2 style={{ fontWeight: "bold" }}>See More LX Feature</h2>
            {renderCarFeatureTable()}
          </Col>

          <Col md={5}>
            <Row>
              <Card style={{ width: "18rem", marginTop: "50px" }}>
                <Card.Header style={{ color: "blue" }}>
                  Exterior color
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item
                    onClick={() => handleColorChange("black-car.jpg")}
                    style={{
                      border: "1px solid #afa6bc",
                      cursor: "pointer",
                      backgroundColor: filterPictureColor(),
                    }}
                  >
                    <Row style={{ alignItems: "center" }}>
                      <Col md={2}>
                        <img
                          src={require("../asset/icons/icon-black.jpg")}
                          alt="icon"
                          style={{ width: "35px", height: "35px" }}
                        />
                      </Col>
                      <Col md={10}>
                        <h5>Crystal Black</h5>
                        <span>Pearl</span>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item
                    onClick={() => handleColorChange("red-car.jpg")}
                    style={{
                      border: "1px solid #afa6bc",
                      cursor: "pointer",
                      backgroundColor: filterPictureColor(),
                    }}
                  >
                    <Row style={{ alignItems: "center" }}>
                      <Col md={2}>
                        <img
                          src={require("../asset/icons/icon-red.jpg")}
                          alt="icon"
                          style={{ width: "35px", height: "35px" }}
                        />
                      </Col>
                      <Col md={10}>
                        <h5>Rallye Red</h5>
                        <span>Metalic</span>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item
                    onClick={() => handleColorChange("silver-car.jpg")}
                    style={{
                      border: "1px solid #afa6bc",
                      cursor: "pointer",
                      backgroundColor: filterPictureColor(),
                    }}
                  >
                    <Row style={{ alignItems: "center" }}>
                      <Col md={2}>
                        <img
                          src={require("../asset/icons/icon-silver.jpg")}
                          alt="icon"
                          style={{ width: "35px", height: "35px" }}
                        />
                      </Col>
                      <Col md={10}>
                        <h5>Lunar Silver</h5>
                        <span>Metalic</span>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item
                    onClick={() => handleColorChange("steel-car.jpg")}
                    style={{
                      border: "1px solid #afa6bc",
                      cursor: "pointer",
                      backgroundColor: filterPictureColor(),
                    }}
                  >
                    <Row style={{ alignItems: "center" }}>
                      <Col md={2}>
                        <img
                          src={require("../asset/icons/icon-steel.jpg")}
                          alt="icon"
                          style={{ width: "35px", height: "35px" }}
                        />
                      </Col>
                      <Col md={10}>
                        <h5>Modern Steel</h5>
                        <span>Metalic</span>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
                <Card.Header style={{ color: "blue" }}>Wheels</Card.Header>
              </Card>
            </Row>

            <Row style={{ marginTop: "6%" }}>{renderWheelCar()}</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ChangeColorCar;

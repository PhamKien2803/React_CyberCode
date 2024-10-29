import React from "react";
import {
  Button,
  Card,
  Form,
} from "react-bootstrap";

function DetailsPhone({ phoneProps, viewDetailsProps, addtoCartProps, filterCheckBoxProps }) {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={phoneProps.hinhAnh} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {phoneProps.tenSP}
          </Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            {phoneProps.giaBan} VND
          </Card.Text>
          <div style={{ alignItems: "center", marginLeft: "18%" }}>
            <Button
              onClick={() => viewDetailsProps(phoneProps)}
              variant="success"
              block
            >
              Xem chi tiết
            </Button>

            <Button
              style={{ marginLeft: "3%" }}
              onClick={() => addtoCartProps(phoneProps)}
              variant="danger"
              block
            >
              Thêm giỏ hàng
              <i
                style={{ fontSize: "20px", marginLeft: "8px" }}
                className="fa fa-shopping-cart"
              ></i>
            </Button>
          </div>
          
        </Card.Body>
      </Card>
    </div>
  );
}

export default DetailsPhone;



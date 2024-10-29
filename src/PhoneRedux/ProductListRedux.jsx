import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import ProductItemRedux from "./ProductItemRedux";

function ProductListRedux({ phones }) {
  const renderDataPhoneList = () => {
    return phones.map((phone) => (
      <Col key={phone?.maSP} xs={12} sm={6} md={4} lg={4} className="mb-4">
        <ProductItemRedux phoneProps={phone} />
      </Col>
    ));
  };

  return (
    <div>
      <Container>
        <Row>{renderDataPhoneList()}</Row>
      </Container>
    </div>
  );
}

const productListStore = (state) => {
  return {
    phones: state.stateCartPhone.phone,
  };
};

export default connect(productListStore)(ProductListRedux);

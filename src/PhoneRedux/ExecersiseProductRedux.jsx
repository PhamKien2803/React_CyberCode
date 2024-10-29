import React from "react";
import {
  Col,
  Container,
  Row,
  
} from "react-bootstrap";
import ProductListRedux from "./ProductListRedux";
import CartModalFadeRedux from "./CartModalFadeRedux";

function ExecersiseProductRedux() {
  return (
    <div>
      <Container>
        <h2>Danh Sách Sản Phẩn</h2>
        <CartModalFadeRedux />
        <ProductListRedux />
      </Container>
    </div>
    
  );
  
}

export default ExecersiseProductRedux;

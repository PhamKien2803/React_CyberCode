import React from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";

function XucXac({ xucXacReducer }) {
  const renderDataXucXac = () => {
    return (
      <>
        {xucXacReducer.map((xucSac, index) => (
          <img
            key={index}
            className="ml-2"
            style={{ width: 65, height: 50 }}
            src={xucSac?.hinhAnh}
            alt={xucSac?.hinhAnh}
          />
        ))}
      </>
    );
  };
  return (
    <div>
      <Container>
        <Row>{renderDataXucXac()}</Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    xucXacReducer: state.stateTaiXiu.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);

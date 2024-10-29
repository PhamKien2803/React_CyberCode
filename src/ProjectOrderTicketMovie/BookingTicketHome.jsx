import React from "react";
import backgroundMovie from "../ProjectOrderTicketMovie/Image/bgmovie.jpg";
import { Col, Container, Row } from "react-bootstrap";
import danhSachGheData from "../Data/danhSachGhe.json"
import "../ProjectOrderTicketMovie/CSS/BaiTapBookingTicket.css";
import SeatList from "./SeatList";
import InformationSeat from "./InformationSeat";

function BookingTicketHome() {
  const renderHangGhe = () => {
    return danhSachGheData.Seat.map((hangGhe, index) => (
      <SeatList key={index} hangGhe={hangGhe} soHangGhe={index} />
    ));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundMovie})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", minHeight: "100vh", padding: "20px" }}
        className="bookingMovie"
      >
        <Container fluid>
          <Row>
            <Col md={8}>
              <h1 className="text-center text-warning mb-5">Booking Movie Seat Ticket</h1>
              <div className="text-center mb-3">
                <div className="text-light mb-3">Màn hình</div>
                <div className="screen mx-auto"></div>
              </div>
              <div className="d-flex flex-column align-items-center">
                {renderHangGhe()}
              </div>
            </Col>
            <Col md={4}>
              <h2 className="text-light mb-4">Danh sách ghế bạn chọn</h2>
              <InformationSeat />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default BookingTicketHome;

import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from "axios";
import HeaderMovie from "./HeaderMovie";
import backgroundImg from "./Background/avengers.jpg";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    axios
      .get("/Movie")
      .then((response) => setMovies(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleMouseHover = (event) => {
    setHoveredIndex(event);
  };

  const handleMouseHoverMove = () => {
    setHoveredIndex(null);
  };

  const renderDataMovie = () => {
    return movies.map((movie, index) => (
      //thay vì dùng md={2} thì nó sẽ chỉ căn trên màn hình lớn
      //còn dùng như dưới thì sẽ căn cho mọi màn hình bé hay nhỏ
      //lg-2 đại điện cho chia số lượng thẻ theo 1 hàng
      <Col
        xs={12}
        sm={6}
        md={4}
        lg={2}
        style={{ marginBottom: "4%", marginTop: "3%" }}
      >
        <a
          href={movie?.trailer}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
          onMouseEnter={() => handleMouseHover(index)}
          onMouseLeave={handleMouseHoverMove}
        >
          <Card
            key={movie?.id}
            style={{
              width: "210px",
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
              transform:
                hoveredIndex === index ? "translateY(-10px)" : "translateY(0)",
              boxShadow:
                hoveredIndex === index
                  ? "0 10px 20px rgba(0, 0, 0, 0.3)"
                  : "none",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <Card.Img
              className="card-img-top"
              style={{ height: "290px" }}
              variant="top"
              src={movie?.hinhAnh}
              alt={movie?.tenPhim}
            />
            <Card.Body style={{backgroundColor: "#343a40"}}>
              <Card.Title style={{ fontSize: "17px", height: "50px" }}>
                {movie?.tenPhim}
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "13px",
                  height: "50px",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {movie?.moTa}
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </Col>
    ));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center",
        minHeight: "2000px",
      }}
    >
      <HeaderMovie />
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", minHeight: "2000px" }}
      >
        <Container fluid style={{ width: "95%" }}>
          <Row>{renderDataMovie()}</Row>
        </Container>
      </div>
    </div>
  );
}

export default Movie;

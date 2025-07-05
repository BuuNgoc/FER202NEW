import React from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';

function Home() {
  const menuImages = [
    '/images/menu-01.jpg',
    '/images/menu-02.jpg',
    '/images/menu-03.jpg',
    '/images/menu-04.jpg',
    '/images/menu-05.jpg',
    '/images/menu-06.jpg',
  ];

  return (
    <Container>
      <Carousel className="mb-4">
        <Carousel.Item>
          <img
            src={process.env.PUBLIC_URL + '/images/slide1.jpg'}
            className="d-block w-100"
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={process.env.PUBLIC_URL + '/images/slide2.jpg'}
            className="d-block w-100"
            alt="Slide 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={process.env.PUBLIC_URL + '/images/slide3.jpg'}
            className="d-block w-100"
            alt="Slide 3"
          />
        </Carousel.Item>
      </Carousel>

      <Row className="mt-4 text-center">
        {menuImages.map((img, idx) => (
          <Col key={idx} xs={6} md={3} lg={2} className="mb-3">
            <img
              src={process.env.PUBLIC_URL + img}
              alt={`Menu ${idx + 1}`}
              className="img-fluid rounded-circle"
            />
            <p className="mt-2">Menu {idx + 1}</p>
          </Col>
        ))}
      </Row>

      <h2 className="text-danger mt-4">This is Home Page</h2>
    </Container>
  );
}

export default Home;

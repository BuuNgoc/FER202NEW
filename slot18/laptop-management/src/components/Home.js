import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LaptopList from './LaptopList';
import { Container } from 'react-bootstrap';
import banner1 from '../assets/banner1.jpg'; // Thêm 3 ảnh banner vào thư mục assets
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#1e1e2f', color: '#fff', minHeight: '100vh' }}>
      {/* Carousel Banner */}
      <Carousel fade interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </Carousel.Item>
      </Carousel>

      {/* Product Display Section */}
      <Container className="py-5">
        <h2 className="text-center text-light mb-4">Product Showcase</h2>
        <LaptopList /> 
      </Container>
    </div>
  );
};

export default Home;

import React from 'react';
import { Carousel } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={process.env.PUBLIC_URL + '/images/slide1.jpg'} className="d-block w-100" alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={process.env.PUBLIC_URL + '/images/slide2.jpg'} className="d-block w-100" alt="Slide 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={process.env.PUBLIC_URL + '/images/slide3.jpg'} className="d-block w-100" alt="Slide 3" />
        </Carousel.Item>
      </Carousel>
      <h2 className="mt-3">This is Home Page</h2>
    </div>
  );
}

export default Home;

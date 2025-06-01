import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
  return (
    <div className="position-relative">
      <img src="img/banner.jpg" className="img-fluid w-100" alt="Banner" />
      <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
        <h2>Neapolitan Pizza</h2>
        <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
      </div>
    </div>
  );
}

export default Banner;

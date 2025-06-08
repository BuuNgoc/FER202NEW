import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
  return (
    <div
      id="pizzaCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <img src="img/banner.jpg" className="d-block w-100" alt="Banner" />
          <div className="carousel-caption d-none d-md-block">
            <h2>Neapolitan Pizza</h2>
            <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img src="img/pizza2.jpg" className="d-block w-100" alt="Pizza 2" />
          <div className="carousel-caption d-none d-md-block">
            <h2>Neapolitan Pizza</h2>
            <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img src="img/pizza3.jpg" className="d-block w-100" alt="Pizza 3" />
          <div className="carousel-caption d-none d-md-block">
            <h2>Neapolitan Pizza</h2>
            <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="carousel-item">
          <img src="img/pizza4.jpg" className="d-block w-100" alt="Pizza 4" />
          <div className="carousel-caption d-none d-md-block">
            <h2>Neapolitan Pizza</h2>
            <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
          </div>
        </div>

        {/* Slide 5 */}
        <div className="carousel-item">
          <img src="img/pizza5.jpg" className="d-block w-100" alt="Pizza 5" />
          <div className="carousel-caption d-none d-md-block">
            <h2>Neapolitan Pizza</h2>
            <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
          </div>
        </div>
      </div>

      {/* Nút chuyển trái/phải */}
      <button className="carousel-control-prev" type="button" data-bs-target="#pizzaCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#pizzaCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Banner;

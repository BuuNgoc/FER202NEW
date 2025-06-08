import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
  return (
    <section className="bg-dark text-white py-5">
      <div className="container">
        <h3 className="mb-4">Our Menu</h3>
        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-md-3">
            <div className="card position-relative">
              <div className="position-absolute bg-warning px-2 py-1 text-dark fw-bold" style={{ top: 0, left: 0 }}>
                SALE
              </div>
              <img src="img/menu1.jpg" className="card-img-top" alt="Margherita Pizza" />
              <div className="card-body text-center">
                <h5 className="card-title">Margherita Pizza</h5>
                <p>
                  <del>$40</del>{' '}
                  <span className="text-warning fw-bold">$24</span>
                </p>
                <button className="btn btn-dark">Buy</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3">
            <div className="card">
              <img src="img/menu2.jpg" className="card-img-top" alt="Mushroom Pizza" />
              <div className="card-body text-center">
                <h5 className="card-title">Mushroom Pizza</h5>
                <p>$25</p>
                <button className="btn btn-dark">Buy</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3">
            <div className="card position-relative">
              <div className="position-absolute bg-warning px-2 py-1 text-dark fw-bold" style={{ top: 0, left: 0 }}>
                NEW
              </div>
              <img src="img/menu3.jpg" className="card-img-top" alt="Hawaiian Pizza" />
              <div className="card-body text-center">
                <h5 className="card-title">Hawaiian Pizza</h5>
                <p>$30</p>
                <button className="btn btn-dark">Buy</button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3">
            <div className="card position-relative">
              <div className="position-absolute bg-warning px-2 py-1 text-dark fw-bold" style={{ top: 0, left: 0 }}>
                SALE
              </div>
              <img src="img/menu4.jpg" className="card-img-top" alt="Pesto Pizza" />
              <div className="card-body text-center">
                <h5 className="card-title">Pesto Pizza</h5>
                <p>
                  <del>$30</del>{' '}
                  <span className="text-warning fw-bold">$16</span>
                </p>
                <button className="btn btn-dark">Buy</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Menu;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
  const pizzas = [
    { title: "Margherita Pizza", priceOld: 40, priceNew: 24, tag: "SALE", img: "menu1.jpg" },
    { title: "Mushroom Pizza", price: 25, img: "menu2.jpg" },
    { title: "Hawaiian Pizza", price: 30, tag: "NEW", img: "menu3.jpg" },
    { title: "Pesto Pizza", priceOld: 30, priceNew: 16, tag: "SALE", img: "menu4.jpg" }
  ];

  return (
    <section className="bg-dark text-white py-5">
      <div className="container">
        <h3 className="mb-4">Our Menu</h3>
        <div className="row g-4">
          {pizzas.map((pizza, idx) => (
            <div className="col-md-3" key={idx}>
              <div className="card position-relative">
                {pizza.tag && (
                  <div className="position-absolute bg-warning px-2 text-dark">{pizza.tag}</div>
                )}
                <img src={`img/${pizza.img}`} className="card-img-top" alt={pizza.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{pizza.title}</h5>
                  {pizza.priceOld ? (
                    <p><del>${pizza.priceOld}</del> <span className="text-warning">${pizza.priceNew}</span></p>
                  ) : (
                    <p>${pizza.price}</p>
                  )}
                  <button className="btn btn-dark">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;

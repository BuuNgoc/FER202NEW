import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BookForm() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h3 className="text-center mb-4">Book Your Table</h3>
        <form>
          <div className="row mb-3">
            <div className="col-md-4"><input type="text" className="form-control" placeholder="Your Name *" /></div>
            <div className="col-md-4"><input type="email" className="form-control" placeholder="Your Email *" /></div>
            <div className="col-md-4">
              <select className="form-select">
                <option>Select a Service</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Birthday</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="4" placeholder="Please write your comment"></textarea>
          </div>
          <div className="text-center">
            <button className="btn btn-warning">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default BookForm;

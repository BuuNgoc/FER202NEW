import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">📞 Contact Us</h2>
      <div className="card shadow p-4">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" placeholder="John Doe" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea className="form-control" id="message" rows="3" placeholder="Write your message here..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

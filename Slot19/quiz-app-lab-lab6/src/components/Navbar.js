import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          QuizApp
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink
              exact="true"
              to="/"
              className="nav-link"
              activeclassname="active"
            >
              Home
            </NavLink>
            <NavLink
              to="/quizzes"
              className="nav-link"
              activeclassname="active"
            >
              Quiz
            </NavLink>
            <NavLink
              to="/quiz/review"
              className="nav-link"
              activeclassname="active"
            >
              Quiz Review
            </NavLink>
            <NavLink
              to="/quiz/result"
              className="nav-link"
              activeclassname="active"
            >
              Result
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              activeclassname="active"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

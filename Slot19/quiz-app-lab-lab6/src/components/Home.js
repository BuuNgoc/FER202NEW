import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="display-4 mb-4">🎓 Welcome to Quiz App</h1>
      <p className="lead mb-5">
        Test your JavaScript knowledge with our interactive quiz.
      </p>
      <Link to="/quizzes" className="btn btn-primary btn-lg shadow">
        Start Quiz
      </Link>
    </div>
  );
};

export default Home;

import React from 'react';
import { useSelector } from 'react-redux';

const QuizReview = () => {
  const questions = useSelector(state => state.quiz.questions);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">✅ Quiz Review</h2>
      {questions.map(q => (
        <div
          key={q.id}
          className={`p-3 mb-3 rounded shadow-sm ${
            q.userAnswer === q.correctAnswer ? 'bg-success text-white' : 'bg-danger text-white'
          }`}
        >
          <h5>{`Q${q.id}. ${q.question}`}</h5>
          <p>Your answer: <strong>{q.userAnswer || "Not Answered"}</strong></p>
          <p>Correct answer: <strong>{q.correctAnswer}</strong></p>
        </div>
      ))}
    </div>
  );
};

export default QuizReview;

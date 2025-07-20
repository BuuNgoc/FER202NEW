import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const questions = useSelector(state => state.quiz.questions);
  const total = questions.length;
  const correct = questions.filter(q => q.userAnswer === q.correctAnswer).length;

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">🎉 Quiz Result</h1>
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: '400px' }}>
        <h2 className="text-success mb-3">You scored</h2>
        <h1 className="display-3">{correct} / {total}</h1>
        <p className="mt-3">
          {correct === total
            ? "Excellent! You got all correct."
            : correct >= total / 2
            ? "Good job! You passed the quiz."
            : "Keep practicing to improve your score."}
        </p>
      </div>
    </div>
  );
};

export default Result;

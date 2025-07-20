import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnswer, firstQuestion, prevQuestion, nextQuestion, lastQuestion } from './quizSlice';

const Quiz = () => {
  const { questions, currentIndex } = useSelector(state => state.quiz);
  const dispatch = useDispatch();
  const question = questions[currentIndex];

  const handleSelect = (questionId, answer) => {
    dispatch(selectAnswer({ questionId, answer }));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📝 JavaScript Quiz</h2>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{`Q${question.id}. ${question.question}`}</h5>
          <div className="row">
            {question.options.map(option => (
              <div className="col-md-6 col-sm-12" key={option}>
                <div
                  className={`form-check p-3 mb-2 rounded ${
                    question.userAnswer === option
                      ? 'bg-success text-white'
                      : 'bg-light'
                  }`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleSelect(question.id, option)}
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    checked={question.userAnswer === option}
                    onChange={() => handleSelect(question.id, option)}
                    className="form-check-input me-2"
                  />
                  <label className="form-check-label">{option}</label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-outline-primary me-2" onClick={() => dispatch(firstQuestion())}>First</button>
        <button className="btn btn-outline-secondary me-2" onClick={() => dispatch(prevQuestion())}>Prev</button>
        <button className="btn btn-outline-secondary me-2" onClick={() => dispatch(nextQuestion())}>Next</button>
        <button className="btn btn-outline-primary" onClick={() => dispatch(lastQuestion())}>Last</button>
      </div>

      <div className="text-center mt-2">
        <small>Question {currentIndex + 1} of {questions.length}</small>
      </div>
    </div>
  );
};

export default Quiz;

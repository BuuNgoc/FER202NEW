import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import quizData from '../data/quizList';

function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (option) => {
    if (!answered) {
      if (option === quizData[index].correct) {
        setScore(score + 1);
      }
      setAnswered(true);
    }
  };

  const nextQuestion = () => {
    setIndex(index + 1);
    setAnswered(false);
  };

  if (index >= quizData.length) {
    return (
      <div className="text-center mt-5">
        <h3>Quiz finished!</h3>
        <h4>Score: {score} / {quizData.length}</h4>
      </div>
    );
  }

  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>{quizData[index].question}</Card.Title>
        {quizData[index].options.map((opt, i) => (
          <Button
            key={i}
            className="m-2"
            variant={answered ? (opt === quizData[index].correct ? 'success' : 'danger') : 'outline-primary'}
            onClick={() => handleAnswer(opt)}
          >
            {opt}
          </Button>
        ))}
        {answered && (
          <div className="mt-3">
            <Button onClick={nextQuestion}>Next</Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default Quiz;

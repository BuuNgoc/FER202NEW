import React from 'react';
import { Card, Button } from 'react-bootstrap';

function QuestionCard({ questionObj, qIndex, onAnswer, selectedAnswer, showResult }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Question {qIndex + 1}</Card.Title>
        <Card.Text>{questionObj.question}</Card.Text>
        {questionObj.answers.map((ans, idx) => (
          <div key={idx} className="mb-2">
            <Button
              variant={
                showResult
                  ? ans === questionObj.correctAnswer
                    ? 'success'
                    : ans === selectedAnswer
                    ? 'danger'
                    : 'outline-secondary'
                  : ans === selectedAnswer
                  ? 'primary'
                  : 'outline-secondary'
              }
              onClick={() => !showResult && onAnswer(ans)}
              className="w-100"
            >
              {ans}
            </Button>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default QuestionCard;

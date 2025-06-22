import React, { useState } from 'react';
import { quizData } from '../data/quizData';
import QuestionCard from './QuestionCard';
import { Container, Button, Alert } from 'react-bootstrap';

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const correctCount = selectedAnswers.filter(
    (answer, idx) => answer === quizData[idx].correctAnswer
  ).length;

  return (
    <Container className="mt-4">
      {!showResult ? (
        <>
          <QuestionCard
            questionObj={quizData[currentQuestion]}
            qIndex={currentQuestion}
            onAnswer={handleAnswer}
            selectedAnswer={selectedAnswers[currentQuestion]}
            showResult={false}
          />
          <div className="text-center">
            <Button
              variant="primary"
              onClick={nextQuestion}
              disabled={selectedAnswers[currentQuestion] == null}
            >
              {currentQuestion === quizData.length - 1 ? 'Finish Quiz' : 'Next'}
            </Button>
          </div>
        </>
      ) : (
        <Alert variant="info" className="text-center">
          <h4>Quiz Completed!</h4>
          <p>You answered correctly {correctCount} out of {quizData.length} questions.</p>
          <Button onClick={() => {
            setCurrentQuestion(0);
            setSelectedAnswers([]);
            setShowResult(false);
          }}>Restart Quiz</Button>
        </Alert>
      )}
    </Container>
  );
}

export default QuizApp;

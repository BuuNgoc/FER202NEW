/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Card, Button, Form, Alert, Container, Row, Col } from 'react-bootstrap';
import QuestionCard from './QuestionCard';
import { quizData as initialQuizData } from '../data/quizData';
import './QuizApp.css';

function QuizApp() {
  const [questions, setQuestions] = useState([...initialQuizData]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const [newQuestion, setNewQuestion] = useState({
    question: '',
    answers: ['', '', ''],
    correctAnswer: ''
  });

  const handleAnswer = (answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setSelectedAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  const handleAddQuestion = () => {
    if (
      newQuestion.question.trim() &&
      newQuestion.answers.every((ans) => ans.trim()) &&
      newQuestion.correctAnswer.trim()
    ) {
      setQuestions([...questions, { ...newQuestion }]);
      setNewQuestion({ question: '', answers: ['', '', ''], correctAnswer: '' });
      alert('✅ Question added!');
    } else {
      alert('⚠️ Please fill in all fields!');
    }
  };

  const correctCount = selectedAnswers.filter(
    (answer, idx) => answer === questions[idx].correctAnswer
  ).length;

  return (
    <div className={darkMode ? 'bg-dark text-light min-vh-100' : 'bg-light text-dark min-vh-100'}>
      <Container className="py-5 rounded fade-slide">
        <h1 className="text-center mb-5 fw-bold display-4">🧠 React Quiz App</h1>

        <div className="text-end mb-4">
          <Button variant={darkMode ? 'light' : 'dark'} onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </Button>
        </div>

        {!showResult && currentQuestion === 0 && selectedAnswers.length === 0 && (
          <Card className="mb-5 border-0 shadow-lg">
            <Card.Body>
              <Card.Title className="text-info mb-4 fs-3 text-center border-bottom pb-2">➕ Create New Question</Card.Title>
              <Form>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Question Text</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your question here"
                    value={newQuestion.question}
                    onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                  />
                </Form.Group>

                {newQuestion.answers.map((ans, idx) => (
                  <Form.Group key={idx} className="mb-3">
                    <Form.Label className="fw-semibold">Answer {idx + 1}</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={`Enter answer ${idx + 1}`}
                      value={ans}
                      onChange={(e) => {
                        const updatedAnswers = [...newQuestion.answers];
                        updatedAnswers[idx] = e.target.value;
                        setNewQuestion({ ...newQuestion, answers: updatedAnswers });
                      }}
                    />
                  </Form.Group>
                ))}

                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Select Correct Answer</Form.Label>
                  <Form.Select
                    value={newQuestion.correctAnswer}
                    onChange={(e) => setNewQuestion({ ...newQuestion, correctAnswer: e.target.value })}
                  >
                    <option value="">-- Choose one --</option>
                    {newQuestion.answers.map((ans, idx) => (
                      <option key={idx} value={ans}>{ans || `Answer ${idx + 1}`}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <div className="d-flex justify-content-center">
                  <Button variant="outline-success" size="lg" onClick={handleAddQuestion}>
                    ➕ Add to Quiz
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        )}

        {!showResult ? (
          <div className="fade-slide">
            <QuestionCard
              questionObj={questions[currentQuestion]}
              qIndex={currentQuestion}
              onAnswer={handleAnswer}
              selectedAnswer={selectedAnswers[currentQuestion]}
              showResult={false}
            />
            <div className="text-center">
              <Button variant="outline-primary" size="lg" onClick={nextQuestion} className="mt-4 px-5">
                {currentQuestion < questions.length - 1 ? '➡️ Next' : '✅ Finish Quiz'}
              </Button>
            </div>
          </div>
        ) : (
          <>
            <Alert variant="success" className="text-center mt-5 fs-4 shadow-sm fade-slide">
              🎉 You scored <strong>{correctCount}</strong> out of <strong>{questions.length}</strong>! Great job!
            </Alert>
            <div className="d-flex justify-content-center mt-4">
              <Button
                variant="outline-warning"
                size="lg"
                onClick={resetQuiz}
                className="px-5 py-2 fs-5 fw-bold"
              >
                🔁 Restart Quiz
              </Button>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}

export default QuizApp;

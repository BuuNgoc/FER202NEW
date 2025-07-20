/* eslint-disable react/jsx-no-undef */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import QuizReview from './components/QuizReview';
import Result from './components/Result';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<Quiz />} />
        <Route path="/quiz/review" element={<QuizReview />} />
        <Route path="/quiz/result" element={<Result />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

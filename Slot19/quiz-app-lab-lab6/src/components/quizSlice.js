import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      question: "Inside which HTML element do we put the JavaScript?",
      options: ["<javascript>", "<scripting>", "<script>", "<js>"],
      correctAnswer: "<script>",
      userAnswer: null,
    },
    {
      id: 2,
      question: "What are variables used for in JavaScript Programs?",
      options: [
        "Storing numbers, dates, or other values",
        "Varying randomly",
        "Causing high-school algebra flashbacks",
        "None of these",
      ],
      correctAnswer: "Storing numbers, dates, or other values",
      userAnswer: null,
    },
    {
      id: 3,
      question: "Which company developed JavaScript?",
      options: ["Netscape", "Bell Labs", "Sun Microsystems", "IBM"],
      correctAnswer: "Netscape",
      userAnswer: null,
    },
    {
      id: 4,
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "\\\\", "/* */", "#"],
      correctAnswer: "//",
      userAnswer: null,
    },
    {
      id: 5,
      question: "Which built-in method returns the character at the specified index?",
      options: ["characterAt()", "getCharAt()", "charAt()", "None of the above"],
      correctAnswer: "charAt()",
      userAnswer: null,
    },
  ],
  currentIndex: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      const question = state.questions.find(q => q.id === questionId);
      if (question) {
        question.userAnswer = answer;
      }
    },
    firstQuestion: (state) => {
      state.currentIndex = 0;
    },
    prevQuestion: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
      }
    },
    nextQuestion: (state) => {
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex += 1;
      }
    },
    lastQuestion: (state) => {
      state.currentIndex = state.questions.length - 1;
    },
  },
});

export const { selectAnswer, firstQuestion, prevQuestion, nextQuestion, lastQuestion } = quizSlice.actions;
export default quizSlice.reducer;

// App.js
import React from 'react';
import ValidatedInput from './components/Exercise4';
import EmailPasswordForm from './components/Exercise5';
import ComplexForm from './components/Exercise6';

export default function App() {
  return (
    <div className="container mt-4">
      <h2>Exercise 4: Basic Input Validation</h2>
      <ValidatedInput />

      <hr />

      <h2>Exercise 5: Email & Password Validation</h2>
      <EmailPasswordForm />

      <hr />

      <h2>Exercise 6: Complex Form Validation</h2>
      <ComplexForm />
    </div>
  );
}

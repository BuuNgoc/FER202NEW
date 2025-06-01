import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Banner from './Banner';
import Menu from './Menu';
import BookForm from './BookForm';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Menu />
      <BookForm />
    </div>
  );
}

export default App;

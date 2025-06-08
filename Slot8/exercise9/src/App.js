import React from 'react';
import SimpleCard from './components/SimpleCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleWebsite from './SimpleWebsite';

const App = () => {
  const item2 = {
    title: 'Nguyễn Ngọc Bữu - FPT Đà Nẵng',
    description: 'Mobile: 0123456789',
    imageUrl: 'https://th.bing.com/th/id/OIP.H7B2zQa6tyItU1JR6pPcngHaEE?rs=1&pid=ImgDetMain',
  };

  return (
    <div className="container mt-5">
      <SimpleCard item={item2} />
        <SimpleWebsite />
    </div>
  );
};

export default App;

import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function AboutMe() {
  return (
    <Card style={{ width: '18rem', margin: '20px auto' }}>
      <Card.Body>
        <Card.Title>Nguyễn Ngọc Bữu </Card.Title>
        <Card.Text>
          I am a web developer who loves creating interactive user interfaces with React Bootstrap.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AboutMe;

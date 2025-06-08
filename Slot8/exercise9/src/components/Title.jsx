import React from 'react';
import { Card } from 'react-bootstrap';

const Title = ({ text }) => (
  <Card.Title className="text-warning fw-bold">{text}</Card.Title>
);

export default Title;

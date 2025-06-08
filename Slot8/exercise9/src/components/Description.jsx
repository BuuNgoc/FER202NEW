import React from 'react';
import { Card } from 'react-bootstrap';

const Description = ({ text }) => (
  <Card.Text className="text-muted">{text}</Card.Text>
);

export default Description;

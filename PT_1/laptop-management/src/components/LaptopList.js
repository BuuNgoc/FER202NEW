// 2. LaptopList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LaptopList = () => {
  const [laptops, setLaptops] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/Laptops').then((res) => setLaptops(res.data));
  }, []);

  const filtered = laptops.filter((lap) =>
    lap.brand.toLowerCase().includes(search.toLowerCase()) ||
    lap.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h2 className="text-center">Laptop List</h2>
      <Form.Control
        type="text"
        placeholder="Search by brand or model"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
      <Row>
        {filtered.map((lap) => (
          <Col md={3} key={lap.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={lap.image} height="200" style={{ objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{lap.brand} {lap.model}</Card.Title>
                <Card.Text><strong>Year:</strong> {lap.year}</Card.Text>
                <Card.Text><strong>Price:</strong> {lap.price}</Card.Text>
                <Button as={Link} to={`/laptops/${lap.id}`} variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LaptopList;
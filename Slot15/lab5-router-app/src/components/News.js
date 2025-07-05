import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import newLists from '../data/newsList';

function News() {
  return (
    <div>
      <h2>News Category</h2>
      <Row>
        {newLists.map(news => (
          <Col md={3} key={news.id} className="mb-3">
            <Card>
              <Card.Img variant="top" src={news.images} />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.description}</Card.Text>
                <Button variant="primary">Read More</Button>  
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default News;

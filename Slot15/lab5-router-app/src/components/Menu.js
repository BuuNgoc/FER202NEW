import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import menuList from '../data/menuList';

function Menu() {
  return (
    <div>
      <h2>Menu Page</h2>
      <Row>
        {menuList.map(menu => (
          <Col md={3} sm={6} xs={12} key={menu.id} className="mb-3">
            <Card>
              <Card.Img variant="top" src={menu.image} />
              <Card.Body>
                <Card.Title>{menu.name}</Card.Title>
                <Card.Text>{menu.description}</Card.Text>
                <Card.Link href="#">View Details</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Menu;

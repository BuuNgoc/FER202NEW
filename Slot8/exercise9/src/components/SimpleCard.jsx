import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';

const SimpleCard = ({ item }) => {
  const { title, description, imageUrl } = item;

  return (
    <Card className="shadow-sm p-3 rounded" style={{ maxWidth: '600px' }}>
      <Row className="align-items-center">
        {/* Logo bên trái */}
        <Col xs={6} className="text-center">
          <Image
            src={imageUrl}
            alt="Logo"
            fluid
            style={{ maxHeight: '80px', objectFit: 'contain' }}
          />
        </Col>

        {/* Thông tin bên phải, căn giữa và căn giữa chữ */}
        <Col xs={6} className="text-center d-flex flex-column justify-content-center">
          <div className="fw-bold">{title}</div>
          <div className="text-muted">{description}</div>
        </Col>
      </Row>
    </Card>
  );
};

export default SimpleCard;

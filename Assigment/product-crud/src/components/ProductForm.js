import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ProductForm = ({ mode }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({ name: '', description: '', price: '', currentPrice: '', image: 'laptop1.png' });
  const navigate = useNavigate();

  useEffect(() => {
    if (mode === 'edit') {
      axios.get(`http://localhost:3001/products/${id}`)
        .then(res => setProduct(res.data));
    }
  }, [id, mode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'add') {
      axios.post("http://localhost:3001/products", product).then(() => navigate("/products"));
    } else {
      axios.put(`http://localhost:3001/products/${id}`, product).then(() => navigate("/products"));
    }
  };

  return (
    <Container className="text-white">
      <h2 className="text-center mb-4">{mode === 'add' ? 'Add' : 'Edit'} Product</h2>
      <Form onSubmit={handleSubmit}>
        {['name', 'description', 'price', 'currentPrice'].map(field => (
          <Form.Group className="mb-3" key={field}>
            <Form.Label>{field}</Form.Label>
            <Form.Control
              name={field}
              value={product[field]}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
              required
            />
          </Form.Group>
        ))}
        <Button variant="primary" type="submit">
          {mode === 'add' ? 'Add Product' : 'Save Product'}
        </Button>
      </Form>
    </Container>
  );
};

export default ProductForm;

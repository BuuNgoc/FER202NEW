import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div className="text-white text-center">Loading...</div>;

  const discount = Math.round((1 - product.currentPrice.replace(/\D/g, '') / product.price.replace(/\D/g, '')) * 100);

  return (
    <Container className="text-black text-center mt-5">
      <h2>{product.name}</h2>
      <img src={`/images/${product.image}`} alt={product.name} style={{ width: 300 }} />
      <p className="mt-3">{product.description}</p>
      <p>Price: {product.price} ₫</p>
      <p>Current Price: {product.currentPrice} ₫</p>
      <p>Discount: {discount} %</p>
      <Button variant="primary" onClick={() => navigate('/products')}>Back Home</Button>
      <Button as={Link} to={`/edit/${product.id}`} className="ms-2" variant="danger">Edit</Button>
    </Container>
  );
};

export default ProductDetail;

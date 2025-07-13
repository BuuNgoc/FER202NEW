import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Lấy danh sách sản phẩm
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://localhost:3001/products")
      .then(res => setProducts(res.data))
      .catch(() => setProducts([]));
  };

  // Xóa sản phẩm
  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
      try {
        await axios.delete(`http://localhost:3001/products/${id}`);
        fetchProducts(); // refresh lại danh sách sau khi xóa
      } catch (error) {
        alert("Lỗi khi xóa sản phẩm!");
      }
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center text-white mb-4">Product List</h2>

      {products.length === 0 ? (
        <p className="text-white text-center">No products found.</p>
      ) : (
        <Row>
          {products.map(product => (
            <Col md={3} sm={6} xs={12} className="mb-4" key={product.id}>
              <Card className="h-100 shadow-sm">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={`/images/${product.image}`}
                    alt={product.name}
                    style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-danger">{product.name}</Card.Title>
                  <Card.Text style={{ flexGrow: 1 }}>
                    {product.description.slice(0, 60)}...
                  </Card.Text>
                  <p className="mb-1">
                    <del>{product.price} ₫</del>
                  </p>
                  <p className="text-danger fw-bold">{product.currentPrice} ₫</p>
                  <div className="d-grid gap-2">
                    <Button as={Link} to={`/product/${product.id}`} variant="outline-primary" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline-danger" size="sm" onClick={() => handleDelete(product.id)}>
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductList;

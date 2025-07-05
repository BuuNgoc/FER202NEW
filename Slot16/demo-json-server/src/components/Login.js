// src/components/Login.js
import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Giả lập thông tin hợp lệ
    if (email === 'admin@example.com' && password === '123456') {
      setError('');
      navigate('/posts'); // ✅ Điều hướng đến Post
    } else {
      setError('Email hoặc mật khẩu không đúng!');
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '500px' }}>
      <h3 className="mb-4 text-center">🔐 Đăng Nhập</h3>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Địa chỉ Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Đăng nhập
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Login;

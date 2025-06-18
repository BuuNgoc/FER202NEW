import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function EmailPasswordForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passValid, setPassValid] = useState(true);

  useEffect(() => {
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    setEmailValid(email === '' || emailRegex.test(email));
    setPassValid(password === '' || password.length >= 8);
  }, [email, password]);

  const isFormValid = email && password && emailValid && passValid;

  return (
    <Form className="p-3">
      <Form.Group controlId="email5" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Nhập email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={!emailValid}
        />
        <Form.Control.Feedback type="invalid">
          Email không hợp lệ. Vui lòng nhập lại!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="pass5" className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Nhập mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={!passValid}
        />
        <Form.Control.Feedback type="invalid">
          Mật khẩu phải có ít nhất 8 ký tự
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" disabled={!isFormValid}>
        Gửi
      </Button>
    </Form>
  );
}

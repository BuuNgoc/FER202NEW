import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function ComplexForm() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [agree, setAgree] = useState(false);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setValid(
      name.trim().length >= 3 &&
      gender &&
      country &&
      agree
    );
  }, [name, gender, country, agree]);

  return (
    <Form className="p-3">
      <Form.Group controlId="fullname6" className="mb-3">
        <Form.Label>Họ và tên</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nhập tên đầy đủ"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isInvalid={name && name.trim().length < 3}
        />
        <Form.Control.Feedback type="invalid">
          Tên phải có ít nhất 3 ký tự
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Giới tính</Form.Label>
        <div>
          <Form.Check
            inline
            label="Nam"
            name="gender"
            type="radio"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
            isInvalid={!gender}
          />
          <Form.Check
            inline
            label="Nữ"
            name="gender"
            type="radio"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
            isInvalid={!gender}
          />
        </div>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Quốc gia</Form.Label>
        <Form.Select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          isInvalid={!country}
        >
          <option value="">-- Chọn quốc gia --</option>
          <option value="VN">Việt Nam</option>
          <option value="US">Mỹ</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Vui lòng chọn quốc gia
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label="Tôi đồng ý với điều khoản"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          isInvalid={!agree}
        />
      </Form.Group>

      <Button variant="primary" disabled={!valid}>
        Gửi
      </Button>
    </Form>
  );
}

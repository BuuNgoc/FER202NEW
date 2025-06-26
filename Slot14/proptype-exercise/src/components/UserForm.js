import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Alert } from "react-bootstrap";

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    gender: "Nam",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const nameLength = formData.name.trim().length;
    const ageNum = parseInt(formData.age, 10);
    const phoneRegex = /^\d{10,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name || nameLength < 3 || nameLength > 50)
      newErrors.name = "Tên phải có từ 3 đến 50 ký tự!";

    if (!formData.age || isNaN(ageNum) || ageNum < 18 || ageNum > 100)
      newErrors.age = "Tuổi phải nằm trong khoảng từ 18 đến 100!";

    if (!formData.email || !emailRegex.test(formData.email))
      newErrors.email = "Email không được để trống hoặc sai định dạng!";

    if (formData.phone && !phoneRegex.test(formData.phone))
      newErrors.phone = "Số điện thoại phải từ 10 đến 15 chữ số!";

    if (!formData.agree)
      newErrors.agree = "Bạn phải đồng ý với điều khoản!";

    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      alert("✅ Dữ liệu hợp lệ!");
      setShowAlert(false);
    }
  };

  return (
    <Container>
      <h3 className="mb-3">Đăng Ký Người Dùng</h3>
      {showAlert && (
        <Alert variant="danger">
          <strong>Lỗi:</strong> Vui lòng kiểm tra các trường hợp lỗi.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAge">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGender">
          <Form.Label>Giới tính</Form.Label>
          <Form.Select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option>Nam</option>
            <option>Nữ</option>
            <option>Khác</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAgree">
          <Form.Check
            type="checkbox"
            name="agree"
            label="Đồng ý với điều khoản"
            checked={formData.agree}
            onChange={handleChange}
            isInvalid={!!errors.agree}
            feedback={errors.agree}
            feedbackType="invalid"
          />
        </Form.Group>

        <Button type="submit">Gửi</Button>
      </Form>
    </Container>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;

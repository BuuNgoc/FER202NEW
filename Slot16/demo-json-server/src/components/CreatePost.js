import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.length < 3 || content.length < 10) {
      setError("Tiêu đề > 3 ký tự và nội dung > 10 ký tự!");
      return;
    }
    await axios.post("http://localhost:3000/posts", { title, content });
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Tạo bài viết mới</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className="mb-3">
        <Form.Label>Tiêu đề</Form.Label>
        <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Nội dung</Form.Label>
        <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} />
      </Form.Group>
      <Button type="submit">Lưu</Button>
    </Form>
  );
}

CreatePost.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default CreatePost;

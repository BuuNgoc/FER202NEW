import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/posts/${id}`, { title, content });
    navigate("/");
  };

  return (
    <Form onSubmit={handleUpdate}>
      <h3>Chỉnh sửa bài viết</h3>
      <Form.Group className="mb-3">
        <Form.Label>Tiêu đề</Form.Label>
        <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Nội dung</Form.Label>
        <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} />
      </Form.Group>
      <Button type="submit">Cập nhật</Button>
    </Form>
  );
}

export default EditPost;

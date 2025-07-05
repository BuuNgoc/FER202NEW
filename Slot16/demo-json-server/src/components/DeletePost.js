import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

function DeletePost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/posts/${id}`);
    navigate("/");
  };

  return (
    <div>
      <h3>Bạn có chắc muốn xóa bài viết này?</h3>
      <Button variant="danger" onClick={handleDelete}>Xóa</Button>
      <Button variant="secondary" onClick={() => navigate("/")}>Hủy</Button>
    </div>
  );
}

export default DeletePost;

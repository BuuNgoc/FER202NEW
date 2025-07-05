import React, { useEffect, useState } from "react";
import { Table, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:3000/posts");
    setPosts(res.data);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa bài viết này không?")) {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      fetchPosts();
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return loading ? (
    <Spinner animation="border" />
  ) : (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Nội dung</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.content}</td>
              <td>
                <Button as={Link} to={`/edit/${post.id}`} variant="warning" size="sm" className="me-2">Sửa</Button>
                <Button onClick={() => handleDelete(post.id)} variant="danger" size="sm">Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button as={Link} to="/create">Tạo bài viết mới</Button>
    </>
  );
}

export default PostList;

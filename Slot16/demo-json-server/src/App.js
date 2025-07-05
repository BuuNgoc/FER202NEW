import React from "react";
import { Route, Routes } from "react-router-dom";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import DeletePost from "./components/DeletePost";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">React CRUD</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/create">Create Post</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="py-4">
        <h1 className="text-center mb-4 text-primary">Quản lý Bài Viết</h1>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/delete/:id" element={<DeletePost />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;

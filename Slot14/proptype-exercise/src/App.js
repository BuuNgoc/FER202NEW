import React from "react";
import UserProfile from "./components/UserProfile";     // Ví dụ 1
import UserProfile2 from "./components/UserProfile2";   // Ví dụ 2
import MyForm from "./components/MyForm";               // Ví dụ 3
import { Container } from "react-bootstrap";

const App = () => {
  const handleFormSubmit = (formData) => {
    console.log("📤 Dữ liệu đã gửi:", formData);
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4 fw-bold">Ứng Dụng React</h1>

      {/* Ví dụ 1: Kiểm tra props đơn giản */}
      <UserProfile name="Nguyễn Văn A" age={25} />
      <UserProfile name="" age={25} />
      <UserProfile name="Nguyễn Văn B" age="twenty five" />
      <UserProfile name="Nguyễn Văn C" age={null} />

      <hr />

      {/* Ví dụ 2: Sử dụng form kiểm tra dữ liệu */}
      <UserProfile2 name="Nguyễn Văn A" age={25} onSubmit={handleFormSubmit} />
      <UserProfile2 name="Nguyễn Văn B" age="twenty five" onSubmit={handleFormSubmit} />
      <UserProfile2 name="" age={30} onSubmit={handleFormSubmit} />

      <hr />

      {/* Ví dụ 3: Đăng ký người dùng bằng useReducer */}
      <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
    </Container>
  );
};

export default App;

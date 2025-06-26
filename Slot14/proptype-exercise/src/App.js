import React from "react";
import UserProfile from "./components/UserProfile";       // Ví dụ 1
import UserProfile2 from "./components/UserProfile2";     // Ví dụ 2
import MyForm from "./components/MyForm";                 // Ví dụ 3
import UserForm from "./components/UserForm";             // Ví dụ 4
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const App = () => {
  const handleSubmit2 = (data) => {
    console.log("📨 Form 2 Submitted:", data);
  };

  const handleSubmit3 = (data) => {
    console.log("📨 Form 3 Submitted:", data);
  };

  const handleSubmit4 = (data) => {
    console.log("📨 Form 4 Submitted:", data);
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5 fw-bold">Ứng Dụng React</h1>

      {/* Ví dụ 1 */}
      <section className="mb-5">
        <h3>🔹 Ví dụ 1: Kiểm tra thủ công</h3>
        <UserProfile name="Nguyễn Văn A" age={25} />
        <UserProfile name="" age={25} />
        <UserProfile name="Nguyễn Văn B" age="twenty five" />
        <UserProfile name="Nguyễn Văn C" age={null} />
      </section>

      <hr />

      {/* Ví dụ 2 */}
      <section className="mb-5">
        <h3>🔹 Ví dụ 2: Kiểm tra với react-bootstrap + validation</h3>
        <UserProfile2 name="Nguyễn Văn A" age={25} onSubmit={handleSubmit2} />
        <UserProfile2 name="Nguyễn Văn B" age="twenty five" onSubmit={handleSubmit2} />
        <UserProfile2 name="" age={30} onSubmit={handleSubmit2} />
      </section>

      <hr />

      {/* Ví dụ 3 */}
      <section className="mb-5">
        <h3>🔹 Ví dụ 3: Đăng ký người dùng (Tên, Email, Mật khẩu)</h3>
        <MyForm title="Đăng Ký Người Dùng" onSubmit={handleSubmit3} />
      </section>

      <hr />

      {/* Ví dụ 4 */}
      <section className="mb-5">
        <h3>🔹 Ví dụ 4: Kiểm tra toàn diện với PropTypes</h3>
        <UserForm onSubmit={handleSubmit4} />
      </section>
    </Container>
  );
};

export default App;

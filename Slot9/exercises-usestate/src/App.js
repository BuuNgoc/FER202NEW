import React from "react";
import Counter from "./components/Counter";
import UserInfoForm from "./components/UserInfoForm";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="container">
      <h2>Ví dụ 1: Counter</h2>
      <Counter />

      <hr />

      <h2>Ví dụ 2: Form nhập tên + tuổi</h2>
      <UserInfoForm />

      <hr />

      <h2>Ví dụ 3: Chọn sản phẩm</h2>
      <ProductList />
    </div>
  );
}

export default App;

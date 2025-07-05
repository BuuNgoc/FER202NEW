import React, { useEffect, useState } from 'react';

function PromiseExample() {
  const [message, setMessage] = useState('');

  // Hàm giả lập gọi API trả về Promise
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = '📦 Dữ liệu đã được tải';
        const error = null;
        if (data) {
          resolve(data);     // Thành công
        } else {
          reject(error);     // Thất bại
        }
      }, 2000);
    });
  };

  useEffect(() => {
    fetchData()
      .then((result) => {
        setMessage(result);
      })
      .catch((err) => {
        setMessage('❌ Đã xảy ra lỗi khi tải dữ liệu');
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Ví dụ với Promise</h2>
      <p>{message || '⏳ Đang tải...'}</p>
    </div>
  );
}

export default PromiseExample;

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from './ProductForm';
import axios from 'axios';

function EditProduct() {
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);
  const navigate = useNavigate();

  const isNew = id === 'new';

  useEffect(() => {
    if (!isNew) {
      axios.get(`http://localhost:3000/products/${id}`)
        .then(res => setInitialData(res.data))
        .catch(() => alert('Cannot load product.'));
    }
  }, [id, isNew]);

  const handleSubmit = async (data) => {
    try {
      if (isNew) {
        await axios.post('http://localhost:3000/products', data);
      } else {
        await axios.put(`http://localhost:3000/products/${id}`, data);
      }
      navigate('/');
    } catch (e) {
      alert('Save failed.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>{isNew ? 'Add' : 'Edit'} Product</h2>
      {isNew || initialData ? (
        <ProductForm initialData={initialData} onSubmit={handleSubmit} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default EditProduct;

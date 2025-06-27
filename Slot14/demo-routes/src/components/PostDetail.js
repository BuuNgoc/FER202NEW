// src/components/PostDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Post not found');
        return res.json();
      })
      .then((data) => setPost(data))
      .catch((err) => console.error('❌ Error:', err));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;

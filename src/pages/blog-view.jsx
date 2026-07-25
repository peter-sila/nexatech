// ViewBlog.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ViewBlog = () => {
  const { id } = useParams();
  
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/view-blog.php?id=${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('This article could not be loaded or does not exist.');
      }
      return response.json();
    })
    .then((result) => {
      if (result.status === 'success') {
        setBlog(result.data);
      } else {
        setError(result.message);
      }
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div>
        <h2>Loading Article Content...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>Error</h2>
        <p>{error}</p>
        <Link to="/blogs">Back to All Blogs</Link>
      </div>
    );
  }

  return (
    <article>
      <Link to="/blogs">
        Back to Articles List
      </Link>
      
      <header>
        <span>
          {blog.category}
        </span>
        <h1>
          {blog.title}
        </h1>
        <p>
          {blog.sub_title}
        </p>
        <div>
          By <strong>{blog.author}</strong> • Published on {new Date(blog.created_at).toLocaleDateString()}
        </div>
      </header>
      <div>
        {blog.content}
      </div>
    </article>
  );
};

export default ViewBlog;

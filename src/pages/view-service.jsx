// ViewBlog.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ViewService = () => {
  const { id } = useParams();
  
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/view-service.php?id=${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('This article could not be loaded or does not exist.');
      }
      return response.json();
    })
    .then((result) => {
      if (result.status === 'success') {
        setService(result.data);
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
        <Link to="/blogs">Back to All Services</Link>
      </div>
    );
  }

  return (
    <article>
      <Link to="/services">
        Back to Services List
      </Link>
      
      <header>
        <span>
          {service.category}
        </span>
        <h1>
          {service.title}
        </h1>
        <p>
          {service.sub_title}
        </p>
        <div>
          By <strong>{service.author}</strong> • Published on {new Date(service.created_at).toLocaleDateString()}
        </div>
      </header>
      <div>
        {service.content}
      </div>
    </article>
  );
};

export default ViewService;

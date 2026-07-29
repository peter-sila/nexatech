// ViewBlog.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import '../css/blog-view.css';

const fallbackBlogs = [
  {
    id: '1',
    title: 'Deep-Dive into Distributed System Architecture and Microservices Failure Modes',
    sub_title: 'An exhaustive analysis of network partitions, distributed transactions, saga patterns, and structural resilience in cloud environments.',
    category: 'Cloud Computing',
    author: 'NexaTech Team',
    created_at: '2026-07-01',
    content: 'Microservices unlock flexibility, but they introduce a new set of operational realities.\n\nTeams need to design for network instability, partial failure, and graceful recovery from the beginning.'
  },
  {
    id: '2',
    title: 'Designing for Reliability in Modern Cloud Platforms',
    sub_title: 'A practical guide to resilience patterns, observability, and dependable release practices.',
    category: 'Reliability',
    author: 'NexaTech Team',
    created_at: '2026-07-10',
    content: 'Reliability is not an afterthought. The most effective systems are designed to recover quickly and communicate clearly when something goes wrong.\n\nGood observability makes that possible.'
  }
];

const formatContent = (content) => {
  if (!content) return [];

  return String(content)
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
};

const ViewBlog = () => {
  const { id } = useParams();
  const location = useLocation();
  const initialBlog = location.state?.blog;
  
  const [blog, setBlog] = useState(initialBlog || null);
  const [loading, setLoading] = useState(!initialBlog);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (initialBlog) {
      setBlog(initialBlog);
      setLoading(false);
      return;
    }

    const loadBlog = async () => {
      try {
        const response = await fetch(`http://localhost:8000/view-blog.php?id=${id}`);

        if (!response.ok) {
          throw new Error('This article could not be loaded or does not exist.');
        }

        const result = await response.json();

        if (result?.status === 'success' && result.data) {
          setBlog(result.data);
        } else {
          const fallback = fallbackBlogs.find((item) => item.id === String(id));
          if (fallback) {
            setBlog(fallback);
          } else {
            throw new Error(result?.message || 'This article could not be loaded or does not exist.');
          }
        }
      } catch (err) {
        const fallback = fallbackBlogs.find((item) => item.id === String(id));
        if (fallback) {
          setBlog(fallback);
        } else {
          setError(err.message || 'This article could not be loaded or does not exist.');
        }
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [id, initialBlog]);

  if (loading) {
    return (
      <div className="view-blog-page">
        <div className="article-shell">
          <div className="article-card loading-state">
            <h2>Loading Article Content...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="view-blog-page">
        <div className="article-shell">
          <div className="article-card error-state">
            <h2>Error</h2>
            <p>{error}</p>
            <Link to="/blogs" className="back-link">Back to All Blogs</Link>
          </div>
        </div>
      </div>
    );
  }

  const contentParagraphs = formatContent(blog?.content);

  return (
    <div className="view-blog-page">
      <div className="article-shell">
        <Link to="/blogs" className="back-link">
          ← Back to Articles List
        </Link>

        <article className="article-card">
          <header className="article-header">
            <span className="article-category">
              {blog.category}
            </span>
            <h1>
              {blog.title}
            </h1>
            <p className="article-subtitle">
              {blog.sub_title}
            </p>
            <div className="article-meta">
              By <strong>{blog.author}</strong> • Published on {new Date(blog.created_at).toLocaleDateString()}
            </div>
          </header>
          <div className="article-content">
            {contentParagraphs.map((paragraph, index) => (
              <p key={`${blog.id}-${index}`}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default ViewBlog;

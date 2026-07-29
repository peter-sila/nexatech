// ViewBlog.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import '../css/service-view.css';

const fallbackServices = [
  {
    id: '1',
    title: 'Enterprise Custom Software Engineering',
    sub_title: 'Architecting, building, and deploying robust, tailored software systems engineered to solve complex operational challenges using scalable frameworks and secure database layers.',
    category: 'Custom Software',
    author: 'NexaTech Team',
    created_at: '2026-07-01',
    content: 'We design and build custom software that fits your operations rather than forcing your team to adapt to a generic platform.\n\nOur team focuses on reliability, maintainability, and measurable business impact from the start of every engagement.'
  },
  {
    id: '2',
    title: 'Intelligent Robotic Process Automation (RPA)',
    sub_title: 'Transforming operational efficiency by deploying cognitive software bots that automate repetitive, rules-based tasks across corporate legacy applications without breaking existing workflows.',
    category: 'Automation',
    author: 'NexaTech Team',
    created_at: '2026-07-05',
    content: 'Our RPA solutions help teams remove repetitive work from daily operations with secure, audit-friendly automation.\n\nThe result is faster execution, fewer manual errors, and more time for higher-value work.'
  },
  {
    id: '3',
    title: 'Business Process & Ecosystem Workflow Automation',
    sub_title: 'Connecting disjointed corporate applications and eliminating data silos through custom middleware orchestration frameworks and secure automated data triggers.',
    category: 'Workflow Automation',
    author: 'NexaTech Team',
    created_at: '2026-07-08',
    content: 'We connect disjointed systems so information moves smoothly across your business processes.\n\nThis reduces delays and creates a more consistent experience for both staff and customers.'
  }
];

const formatContent = (content) => {
  if (!content) return [];

  return String(content)
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
};

const ViewService = () => {
  const { id } = useParams();
  const location = useLocation();
  const initialService = location.state?.service;
  
  const [service, setService] = useState(initialService || null);
  const [loading, setLoading] = useState(!initialService);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
      setLoading(false);
      return;
    }

    const loadService = async () => {
      try {
        const response = await fetch(`http://localhost:8000/view-service.php?id=${id}`);

        if (!response.ok) {
          throw new Error('This article could not be loaded or does not exist.');
        }

        const result = await response.json();

        if (result?.status === 'success' && result.data) {
          setService(result.data);
        } else {
          const fallback = fallbackServices.find((item) => item.id === String(id));
          if (fallback) {
            setService(fallback);
          } else {
            throw new Error(result?.message || 'This article could not be loaded or does not exist.');
          }
        }
      } catch (err) {
        const fallback = fallbackServices.find((item) => item.id === String(id));
        if (fallback) {
          setService(fallback);
        } else {
          setError(err.message || 'This article could not be loaded or does not exist.');
        }
      } finally {
        setLoading(false);
      }
    };

    loadService();
  }, [id, initialService]);

  if (loading) {
    return (
      <div className="view-service-page">
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
      <div className="view-service-page">
        <div className="article-shell">
          <div className="article-card error-state">
            <h2>Error</h2>
            <p>{error}</p>
            <Link to="/services" className="back-link">Back to All Services</Link>
          </div>
        </div>
      </div>
    );
  }

  const contentParagraphs = formatContent(service?.content);

  return (
    <div className="view-service-page">
      <div className="article-shell">
        <Link to="/services" className="back-link">
          ← Back to Services List
        </Link>

        <article className="article-card">
          <header className="article-header">
            <span className="article-category">
              {service.category}
            </span>
            <h1>
              {service.title}
            </h1>
            <p className="article-subtitle">
              {service.sub_title}
            </p>
            <div className="article-meta">
              By <strong>{service.author}</strong> • Published on {new Date(service.created_at).toLocaleDateString()}
            </div>
          </header>
          <div className="article-content">
            {contentParagraphs.map((paragraph, index) => (
              <p key={`${service.id}-${index}`}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default ViewService;

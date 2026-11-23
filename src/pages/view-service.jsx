import { useParams, Link, useLocation } from 'react-router-dom';
import '../css/service-view.css';
import services from "../data/services";

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
  const service = location.state?.service || services.find((item) => item.id === id);

  if (!service) {
    return (
      <div className="view-service-page">
        <div className="article-shell">
          <div className="article-card error-state">
            <h2>Service not found</h2>
            <p>This service could not be found.</p>
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

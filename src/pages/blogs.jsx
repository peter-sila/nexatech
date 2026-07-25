import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import CallToAction from "../components/cta";
import '../css/blogs.css';

function Blogs() {

  const [blogsList, setBlogsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [networkError, setNetworkError] = useState(null)

  useEffect(() => {
    fetch("http://localhost:8000/get_blogs.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to establish communication with the blogs engine.");
        }
        return response.json();
      })
      .then((payload) => {
        if (payload.status === "success") {
          setBlogsList(payload.data);
        } else {
          setBlogsList(Array.isArray(payload) ? payload : []);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setNetworkError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="blogs">
      < Header />

      <div className="b-hero">
        <h2>Technical Intel for Modern Developers & Architects.</h2>
        <p>From asynchronous execution runtimes to distributed microservices design patterns, stay ahead of complex software engineering shifts with our weekly deep-dives.</p>
      </div>
      <div className="blog-cards">
        <h3>Stay Informed</h3>

        {isLoading && (
          <div className="loading-state" style={{ padding: "40px", textAlign: "center" }}>
            <h4>Syncing Latest Articles...</h4>
          </div>
        )}

        {networkError && (
          <div className="error-state" style={{ padding: "40px", textAlign: "center", color: "#dc3545" }}>
            <h4>Data Fetch Failed</h4>
            <p>{networkError}</p>
          </div>
        )}

        {!isLoading && !networkError && blogsList.length === 0 && (
          <div className="empty-state" style={{ padding: "40px", textAlign: "center" }}>
            <p>No published articles found in the repository index.</p>
          </div>
        )}

        {!isLoading && !networkError && blogsList.length > 0 && (
          <div className="cards">
            {blogsList.map((blog) => (
              <div className="card" key={blog.id}>
                <img 
                  src={blog.images_url || "assets/images/blog-placeholder.jpg"} 
                  alt={blog.title} 
                />
                
                <div className="info">
                  <p>
                    <strong>Published On:</strong> {blog.created_at}
                  </p>
                  <p>
                    <strong>Author:</strong> {blog.author}
                  </p>
                  <p>
                    <strong>Category:</strong> {blog.category}
                  </p>
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.sub_title}</p>
                <Link to={`/blog/${blog.id}`} className="read-more-btn">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      < CallToAction />

      < Footer />

    </div>
  )
}

export default Blogs
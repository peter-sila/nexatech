import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import CallToAction from "../components/cta";
import '../css/services.css'

function Services() {
  
  const [servicesList, setServicesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [networkError, setNetworkError] = useState(null)

  useEffect(() => {
    fetch("http://localhost:8000/get_services.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to establish communication with the services engine.");
        }
        return response.json();
      })
      .then((payload) => {
        if (payload.status === "success") {
          setServicesList(payload.data);
        } else {
          setServicesList(Array.isArray(payload) ? payload : []);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setNetworkError(error.message);
        setIsLoading(false);
      });
  }, []);
  
  return (
    <div className="services">
      < Header />
      <div className="s-hero">
        <h2>Transform Your Operations with Our Proven Services</h2>
        <p>We help growing companies scale faster and work smarter through custom strategies, hands-on support, and industry-leading expertise.</p>
        <a href="">Book a Free Consultation</a>
      </div>
      <div className="list-services">
        <h2>Transform Your Operations with Our Proven Services</h2>
        <p>We offer a comprehensive range of software development and automation services designed to drive your business forward in the digital age.</p>
        
        {isLoading && (
          <div className="loading-state" style={{ padding: "40px", textAlign: "center" }}>
            <h4>Syncing Services...</h4>
          </div>
        )}

        {networkError && (
          <div className="error-state" style={{ padding: "40px", textAlign: "center", color: "#dc3545" }}>
            <h4>Data Fetch Failed</h4>
            <p>{networkError}</p>
          </div>
        )}

        {!isLoading && !networkError && servicesList.length === 0 && (
          <div className="empty-state" style={{ padding: "40px", textAlign: "center" }}>
            <p>No published services found in the repository index.</p>
          </div>
        )}

        {!isLoading && !networkError && servicesList.length > 0 && (
          <div className="cards">
            {servicesList.map((service) => (
              <div className="card" key={service.id}>
                <img 
                  src={service.images_url || "assets/images/service-placeholder.jpg"} 
                  alt={service.title} 
                />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={`/service/${service.id}`} className="read-more-btn">
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

export default Services
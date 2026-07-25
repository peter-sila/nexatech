import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import CallToAction from "../components/cta";
import '../css/home.css'

function Home() {
    
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
  
  return(
    <div className="home">
      < Header />
      
      <div className="h-hero">
        <h2>Next-Gen Software Development Powered by Intelligent Automation.</h2>
        <p>From custom enterprise applications to automated continuous integration pipelines, we deliver the decoupled architectures and cloud-native solutions your business needs to stay ahead.</p>
        <a href="">What We Build</a>
        <a href="">Start Your Project</a>
      </div>
      <div className="services">
        <h2>Transform Your Operations with Our Proven Services</h2>
        <p>We help growing companies scale faster and work smarter through custom strategies, hands-on support, and industry-leading expertise.</p>
        
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
      <div className="about-us">
        <h2>WHO WE ARE</h2>
        <h3>We Build the Infrastructure That Powers Tomorrow’s Automated Enterprises.</h3>
        <div className="about-info">
          <img src="/" alt="About" />
          <p>NexaTech is a specialized technology studio focused on high-scale software engineering and intelligent system automation. We bridge the gap between legacy operational limitations and modern cloud capabilities.Whether architecting high-frequency backend APIs, transitioning complex networks to containerized cloud clusters, or building cognitive software automation systems, we deliver the clean engineering your business needs to stay ahead. We act as your strategic technology partner, transforming your core software into a highly optimized engine built for continuous business growth.</p>
        </div>
      </div>
      <div className="why-choose-us">
        <h2>Why Partner With Us</h2>
        <p>Discover how our engineering standards accelerate your enterprise.</p>
        <div className="cards">
          <div className="card">
            <img src="/" alt="Us" />
            <h3>Production-Ready Scalability</h3>
            <p>We build decoupled, type-safe backend environments using modern design patterns to ensure your platforms handle heavy traffic spikes with absolute stability.</p>
          </div>
          <div className="card">
            <img src="/" alt="Us" />
            <h3>Hyper-Efficient Automation</h3>
            <p>Eliminate manual workflow friction. Our custom middleware tracks, intelligent data triggers, and smart software bots optimize your core business pipelines seamlessly.</p>
          </div>
          <div className="card">
            <img src="/" alt="Us" />
            <h3>Cryptographic Data Protection</h3>
            <p>Security is never an afterthought. We isolate your endpoints using strict token-based identity architectures (OAuth2/JWT) and automated testing sweeps.</p>
          </div>
        </div>
      </div>
      < CallToAction />
      < Footer />
    </div>
  )
}

export default Home
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import CallToAction from "../components/cta";
import '../css/services.css'

function Services() {
  
  const [servicesList, setServicesList] = useState([
    {"id":"8","title":"Automated Quality Assurance & Continuous Security Testing","description":"Embedding automated end-to-end user path scripting, unit testing blocks, and code security checks directly into development pipelines to maintain total application uptime.","images_url":"assets/images/services/automated-testing.jpg"},
    {"id":"7","title":"AI-Driven Data Pipelines & Predictive Analytics Automation","description":"Designing automated data ingestion networks (ETL) integrated with predictive machine learning models to synthesize analytics dashboards and spot operational anomalies.","images_url":"assets/images/services/predictive-analytics.jpg"},
    {"id":"6","title":"Legacy System Modernization & Cloud Migrations","description":"Upgrading brittle, monolithic software platforms and obsolete database structures into lean, microservices-driven cloud instances with zero active runtime business disruption.","images_url":"assets/images/services/legacy-modernization.jpg"},
    {"id":"5","title":"Cloud Infrastructure & DevOps Automation","description":"Modernizing server environments via automated continuous integration and delivery pipelines (CI/CD), containerized microservices deployment, and adaptive cloud autoscaling.","images_url":"assets/images/services/devops-infrastructure.jpg"},
    {"id":"4","title":"Enterprise API Engineering & System Integration","description":"Developing secure, lightning-fast, and deeply documented application programming interfaces (REST/GraphQL) enforcing strict OAuth2/JWT token identity validations.","images_url":"assets/images/services/api-integrations.jpg"},
    {"id":"3","title":"Business Process & Ecosystem Workflow Automation","description":"Connecting disjointed corporate applications and eliminating data silos through custom middleware orchestration frameworks and secure automated data triggers.","images_url":"assets/images/services/workflow-orchestration.jpg"},
    {"id":"2","title":"Intelligent Robotic Process Automation (RPA)","description":"Transforming operational efficiency by deploying cognitive software bots that automate repetitive, rules-based tasks across corporate legacy applications without breaking existing workflows.","images_url":"assets/images/services/robotic-automation.jpg"},
    {"id":"1","title":"Enterprise Custom Software Engineering","description":"Architecting, building, and deploying robust, tailored software systems engineered to solve complex operational challenges using scalable frameworks and secure database layers.","images_url":"assets/images/services/enterprise-software.jpg"}
  ]);
  const [isLoading] = useState(false);
  const [networkError] = useState(null);
  
  return (
    <div className="services">
      < Header />
      <div className="s-hero">
        <h2>Transform Your Operations with Our Proven Services</h2>
        <p>We help growing companies scale faster and work smarter through custom strategies, hands-on support, and industry-leading expertise.</p>
        <Link to="/contact-us">Book a Free Consultation</Link>
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
                  className="service-image"
                />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={`/view-service/${service.id}`} className="read-more-btn">
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
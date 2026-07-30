import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import CallToAction from "../components/cta";
import '../css/home.css'

function Home() {
    
  const [servicesList] = useState([
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
  const [networkError] = useState(null)
  
  return(
    <div className="home">
      < Header />
      
      <div className="h-hero">
        <h2>Next-Gen Software Development Powered by Intelligent Automation.</h2>
        <p>From custom enterprise applications to automated continuous integration pipelines, we deliver the decoupled architectures and cloud-native solutions your business needs to stay ahead.</p>
        <Link to="/services">What We Build</Link>
        <Link to="/contact-us">Start Your Project</Link>
      </div>
      <div className="services">
        <h2>Transform Your Operations with Our Proven Services</h2>
        <p>We help growing companies scale faster and work smarter through custom strategies, hands-on support, and industry-leading expertise.</p>

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
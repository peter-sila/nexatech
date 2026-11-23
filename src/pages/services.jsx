import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import CallToAction from "../components/cta";
import '../css/services.css'
import servicesList from "../data/services";

function Services() {

  return (
    <div className="services">
      < Header />
      <div className="s-hero">
        <h2>Services</h2>
        <p>We have the experience, innovative culture, and skills to grasp your ideas and turn them into reality.</p>
        <Link to="/contact-us">Book a Free Consultation</Link>
      </div>
      <div className="list-services">
        <h2>Our Featured Services</h2>
        <p>From custom software and cloud services to cybersecurity and mobile apps, we help bring your ideas to life with practical technology solutions.</p>
        <div className="cards">
          {servicesList.map((service) => (
            <div className="card" key={service.id}>
              <img
                src={service.images_url}
                alt={service.title}
                className="service-image"
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={`/view-service/${service.id}`} state={{ service }} className="read-more-btn">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>

      < CallToAction />

      < Footer />
    </div>
  )
}

export default Services
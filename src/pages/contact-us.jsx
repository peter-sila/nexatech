import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import CallToAction from "../components/cta";
import '../css/contact-us.css'

function Contactus() {
  useEffect(() => {
    document.title = "Contact NexaTech | Software Development & IT Consulting in Kenya";

    const description = document.querySelector("meta[name='description']");
    const keywords = document.querySelector("meta[name='keywords']");

    if (description) {
      description.setAttribute(
        "content",
        "Contact NexaTech for custom software development, web apps, cloud integration, and business automation services in Nairobi, Kenya."
      );
    }

    if (keywords) {
      keywords.setAttribute(
        "content",
        "software development, web development, cloud integration, business automation, IT consulting, Nairobi Kenya"
      );
    }
  }, []);

  return (
    <div className="contact-us">
      <Header />
      <section className="c-hero">
        <div className="hero-content">
          <p className="eyebrow">Contact NexaTech</p>
          <h1>Custom software development and IT consulting for growing businesses</h1>
          <p>Whether you need a modern web app, reliable cloud integration, or workflow automation, our team helps businesses in Nairobi and beyond build practical digital solutions that scale.</p>
          <div className="hero-actions">
            <a href="mailto:info@nexatech.co.ke" className="hero-btn">Email Our Team</a>
            <Link to="/services" className="text-link">Explore Our Services</Link>
          </div>
        </div>
      </section>

      <section className="contact-us-form">
        <div className="section-heading">
          <p className="eyebrow">Let’s talk</p>
          <h2>Reach out for software, automation, and cloud support</h2>
          <p>We work with startups, SMEs, and established organizations that want dependable technology partnerships and clear delivery from day one.</p>
        </div>

        <div className="contact-infor">
          <div className="infor">
            <h3>Contact details</h3>
            <a href="mailto:info@nexatech.co.ke">info@nexatech.co.ke</a>
            <a href="tel:+254794178635">0794178635</a>
            <a href="tel:+254782416883">0782416883</a>
            <address>Nairobi, Kenya</address>

            <ul className="contact-highlights">
              <li>Fast response for new projects and support requests</li>
              <li>Custom solutions for business automation and web platforms</li>
              <li>Trusted guidance for software development and IT strategy</li>
            </ul>

            <div className="contact-links">
              <Link to="/services">Services</Link>
              <Link to="/blogs">Insights</Link>
              <Link to="/about-us">About us</Link>
            </div>
          </div>

          <div className="form">
            <form action="" method="post" encType="text/plain">
              <p>Send a message</p>
              <div className="group-form">
                <input type="text" name="fullname" id="fullname" placeholder="Enter your full name" required />
                <input type="email" name="email" id="email" placeholder="Enter your email address" required />
              </div>
              <input type="number" name="phonenumber" id="phonenumber" placeholder="Enter your phone number" required />
              <textarea name="message" id="message" rows="5" placeholder="Tell us about your project or idea" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section className="our-location">
        <div className="location-card">
          <h3>Serving businesses across Nairobi and beyond</h3>
          <p>From web applications and system integrations to ongoing support, we help teams modernize operations with clear communication and dependable delivery.</p>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  )
}

export default Contactus
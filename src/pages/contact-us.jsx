import Header from "../components/header";
import Footer from "../components/footer";
import CallToAction from "../components/cta";
import '../css/contact-us.css'

function Contactus() {
  return (
    <div className="contact-us">
      < Header />
      <div className="c-hero">
        <h2>Let’s Architect Your Next-Gen Infrastructure.</h2>
        <p>Ready to eliminate manual business bottlenecks, optimize data pathways, or scale your core backends? Connect directly with a systems architect to outline your software engineering and workflow automation goals today.</p>
      </div>
      <div className="contact-us-form">
        <h2>Reach Out To Us</h2>
        <p>Drop us a line to discuss your software engineering, cloud integration, or system automation blueprints.</p>
        <div className="contact-infor">
          <div className="infor">
            <a href="mailto:petersila2002@gmail.com">info@nexatech.co.ke</a>
            <a href="tel:+254794178635">0794178635</a>
            <a href="tel:+254782416883">0782416883</a>
            <address>Nairobi, Kenya</address>
          </div>
          <div className="form">
            <form action="formHandler" method="post">
              <p>Send a Message</p>
              <div className="group-form">
                <input type="text" name="fullname" id="fullname" placeholder="Enter Your Full Name" />
                <input type="email" name="email" id="email" placeholder="Enter Your Email Address" />
              </div>
              <input type="number" name="phonenumber" id="phonenumber" placeholder="Enter Your Phone Number" />
              <textarea name="message" id="message" rows="5" placeholder="Enter Your Message Here"></textarea>
            </form>
          </div>
        </div>
      </div>
      <div className="our-location">
        <p>Google Map</p>
      </div>
      < CallToAction />
      < Footer />
    </div>
  )
}

export default Contactus
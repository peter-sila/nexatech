import "./css/header_footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-flex">
        <div className="logo-d">
          <a href="/">NEXA<span>TECH</span></a>
        </div>
        <div className="links">
          <ul className="navlinks">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/blogs">Blogs</a></li>
          </ul>
        </div>
        <div className="reach-us">
          <ul>
            <li><a href="tel:+254794178635">0794178635</a></li>
            <li><a href="tel:+254782416883">0782416883</a></li>
            <li><a href="mailto:petersila2002@gmail.com">info@nexatech.co.ke</a></li>
          </ul>
        </div>
      </div>
      <p>&copy2025. Nexatech. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
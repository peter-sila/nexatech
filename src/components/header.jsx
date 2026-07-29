import "./css/header_footer.css";

function Header() {
  return (
    <>
      <div className="header">
        <ul> 
          <li><a href="tel:+254794178635">0794178635</a></li>
          <li><a href="tel:+254782416883">0782416883</a></li>
          <li><a href="mailto:petersila2002@gmail.com">info@nexatech.co.ke</a></li>
        </ul>
      </div>
      <div className="nav_bar">
        <a className="logo" href="/">NEXA<span>TECH</span></a>
        <ul className="navlinks">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
          <li><a href="/blogs">Blogs</a></li>
        </ul>
        <a className="nav-cta" href="mailto:petersila2002@gmail.com">Reach Us</a>
      </div>
    </>
  )
}

export default Header
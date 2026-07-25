import Header from "../components/header";
import Footer from "../components/footer";
import CallToAction from "../components/cta";
import '../css/services.css'

function Services() {
  return (
    <div className="services">
      < Header />
      <div className="s-hero">
        <p>Services</p>
      </div>
      <div className="list-services">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card">
            <img src="/" alt="Image" />
            <h3>Title</h3>
            <p>Description</p>
            <a href="">Read More</a>
          </div>
          <div className="card">
            <img src="/" alt="Image" />
            <h3>Title</h3>
            <p>Description</p>
            <a href="">Read More</a>
          </div>
          <div className="card">
            <img src="/" alt="Image" />
            <h3>Title</h3>
            <p>Description</p>
            <a href="">Read More</a>
          </div>
          <div className="card">
            <img src="/" alt="Image" />
            <h3>Title</h3>
            <p>Description</p>
            <a href="">Read More</a>
          </div>
          <div className="card">
            <img src="/" alt="Image" />
            <h3>Title</h3>
            <p>Description</p>
            <a href="">Read More</a>
          </div>
          <div className="card">
            <img src="/" alt="Image" />
            <h3>Title</h3>
            <p>Description</p>
            <a href="">Read More</a>
          </div>
        </div>
      </div>
      < CallToAction />
      < Footer />
    </div>
  )
}

export default Services
import Header from "../components/header";
import Footer from "../components/footer";
import CallToAction from "../components/cta";
import '../css/home.css'

function Home() {
  return(
    <div className="home">
      < Header />
      
      <div className="h-hero">
        <h2>Welcome</h2>
        <h3>Nexatech</h3>
        <a href="">Reach Us</a>
      </div>
      <div className="services">
        <h2>Services</h2>
        <p>Our services</p>
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
        </div>
      </div>
      <div className="about-us">
        <h2>About Us</h2>
        <div className="about-info">
          <img src="/" alt="About" />
          <p>Description</p>
        </div>
      </div>
      <div className="why-choose-us">
        <h2>Why Choose Us</h2>
        <p>Why you should choose nexatech</p>
        <div className="cards">
          <div className="card">
            <img src="/" alt="Us" />
            <h3>reason</h3>
            <p>Small description</p>
          </div>
          <div className="card">
            <img src="/" alt="Us" />
            <h3>reason</h3>
            <p>Small description</p>
          </div>
          <div className="card">
            <img src="/" alt="Us" />
            <h3>reason</h3>
            <p>Small description</p>
          </div>
        </div>
      </div>
      < CallToAction />
      < Footer />
    </div>
  )
}

export default Home
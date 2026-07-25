import Header from "../components/header";
import Footer from "../components/footer";
import CallToAction from "../components/cta";
import '../css/about-us.css'

function AboutUs() {
  return (
    <div className="aboutus">
      < Header />
      <div className="a-hero">
        <p>About nexatech</p>
      </div>
      <div className="who-we-are">
        <h2>Who We Are</h2>
        <p>Description</p>
        <h2>Mission</h2>
        <p>Description</p>
        <h2>Vision</h2>
        <p>Description</p>
      </div>
      <div className="core-value">
        <h2>Core Values</h2>
        <div className="cards">
          <div className="card">
            <h3>Title</h3>
            <p>Description</p>
          </div>
          <div className="card">
            <h3>Title</h3>
            <p>Description</p>
          </div>
          <div className="card">
            <h3>Title</h3>
            <p>Description</p>
          </div>
        </div>
      </div>
      < CallToAction />
      < Footer />
    </div>
  )
}

export default AboutUs
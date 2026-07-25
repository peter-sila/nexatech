import Header from "../components/header";
import Footer from "../components/footer";
import CallToAction from "../components/cta";
import '../css/about-us.css'

function AboutUs() {
  return (
    <div className="aboutus">
      < Header />
      <div className="a-hero">
        <h2>Driving Innovation to Shape the Future of Business and Organizations</h2>
        <p>We are a passionate team of industry experts dedicated to helping companies scale through purpose-driven solutions and transparent partnership.</p>
      </div>
      <div className="who-we-are">
        <h2>Who We Are</h2>
        <p>Founded in 2025, What started as a small, two-person operation in a rented desk space quickly evolved into a full-scale agency driven by a shared passion for problem-solving.</p>
        <p>Over the years, we have helped hundreds of brands streamline their processes and unlock new growth. We have grown our team and expanded our services, but our core mission has never changed: putting our clients' success first.</p>
        <h2>Mission</h2>
        <p>"Our mission is to engineer high-scale, resilient software architectures and intelligent automation frameworks that eliminate manual friction, mitigate technical debt, and empower modern enterprises to operate with absolute efficiency and stability."</p>
        <h2>Vision</h2>
        <p>"Our vision is to become the definitive global benchmark for enterprise technology modernization, pioneering the shift toward fully autonomous, cloud-native business ecosystems where software infrastructure adapts instantly to the demands of tomorrow."</p>
      </div>
      <div className="core-value">
        <h2>Core Values</h2>
        <div className="cards">
          <div className="card">
            <h3>Transparency</h3>
            <p>We believe in honest communication, clear expectations, and total visibility at every stage of our partnership.</p>
          </div>
          <div className="card">
            <h3>Innovation</h3>
            <p>We constantly challenge the status quo, adopting the latest tools and strategies to keep your business ahead of the curve.</p>
          </div>
          <div className="card">
            <h3>Impact</h3>
            <p>We do not just look at metrics; we focus on delivering tangible, long-term results that genuinely change how you do business.</p>
          </div>
        </div>
      </div>
      < CallToAction />
      < Footer />
    </div>
  )
}

export default AboutUs
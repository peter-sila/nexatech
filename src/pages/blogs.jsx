import Header from "../components/header";
import Footer from "../components/footer";
import CallToAction from "../components/cta";
import '../css/blogs.css'

function Blogs() {
  return (
    <div className="blogs">
      < Header />
      <div className="b-hero">
        <p>Blogs</p>
      </div>
      <div className="blog-cards">
        <h3>Stay Informed</h3>
        <div className="cards">
          <div className="card">
            <img src="/" alt="Image" />
            <div className="info">
              <p>Published On:</p>
              <p>Author:</p>
              <p>Category:</p>
            </div>
            <h3>Title</h3>
            <p>Description</p>
            <a href="">Read More</a>
          </div>
          <div className="card">
            <img src="/" alt="Image" />
            <div className="info">
              <p>Published On:</p>
              <p>Author:</p>
              <p>Category:</p>
            </div>
            <h3>Title</h3>
            <p>Description</p>
            <a href="">Read More</a>
          </div>
          <div className="card">
            <img src="/" alt="Image" />
            <div className="info">
              <p>Published On:</p>
              <p>Author:</p>
              <p>Category:</p>
            </div>
            <h3>Title</h3>
            <p>Description</p>
            <a href="">Read More</a>
          </div>
          <div className="card">
            <img src="/" alt="Image" />
            <div className="info">
              <p>Published On:</p>
              <p>Author:</p>
              <p>Category:</p>
            </div>
            <h3>Title</h3>
            <p>Description</p>
            <a href="">Read More</a>
          </div>
          <div className="card">
            <img src="/" alt="Image" />
            <div className="info">
              <p>Published On:</p>
              <p>Author:</p>
              <p>Category:</p>
            </div>
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

export default Blogs
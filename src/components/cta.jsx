import './css/cta.css'

function CallToAction() {
  return (
    <div className="cta">
      <p>Subscribe to our newsletters.</p>
      <div className="subsc">
        <input type="email" name="email" id="email" placeholder="Enter Your Email Address" />
        <button type="submit">Subscribe</button>
      </div>
      <p>Want to enjoy our services</p>
      <button>Reach Out</button>
    </div>
  )
}

export default CallToAction
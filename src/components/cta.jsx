import { useState } from 'react'
import './css/cta.css'

function CallToAction() {
  const [email, setEmail] = useState('')
  const [subscribers, setSubscribers] = useState([])

  const handleSubscribe = (event) => {
    event.preventDefault()
    if (!email.trim()) return

    const newSubscriber = {
      email: email.trim(),
      subscribedAt: new Date().toISOString(),
    }

    setSubscribers((current) => [...current, newSubscriber])
    setEmail('')
  }

  return (
    <div className="cta">
      <p>Subscribe to our newsletters.</p>
      <form className="subsc" onSubmit={handleSubscribe}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
      <p>Want to enjoy our services</p>
      <button>Reach Out</button>
      <pre className="subscribers-json">{JSON.stringify(subscribers, null, 2)}</pre>
    </div>
  )
}

export default CallToAction
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Services from './pages/services'
import Aboutus from './pages/about-us'
import Contactus from './pages/contact-us'
import Blogs from './pages/blogs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about-us" element={<Aboutus/>} />
          <Route path="/contact-us" element={<Contactus/>} />
          <Route path="/blogs" element={<Blogs/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

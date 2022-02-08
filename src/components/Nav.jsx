import React from "react"
import { Link } from "gatsby"

function Nav(props) {
  return (
    <nav>
      <h1>Mariposa Wellness</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/treatments">Treatments</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/book">Contact</Link>
      </div>
    </nav>
  )
}

export default Nav

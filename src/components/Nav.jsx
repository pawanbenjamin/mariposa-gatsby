import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import "../styles/nav.css"

import AquaNeg from "../assets/txtLogo.svg"

function Nav(props) {
  useEffect(() => {
    console.log(visible)
  })

  const [visible, setVisible] = useState(false)

  return (
    <nav className="nav">
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/services">
          Services
        </Link>
        <Link className="link" to="/treatments">
          Treatments
        </Link>
        <Link className="link" to="/faq">
          FAQ
        </Link>
        <Link className="link" to="/book">
          Contact
        </Link>
      </div>
      <AquaNeg
        className="drop-down"
        onClick={() => setVisible(!visible)}
        // onMouseLeave={() => setVisible(false)}
      ></AquaNeg>

      <div className={visible ? "nav-slider" : "nav-slider hide"}>
        <button onClick={() => setVisible(!visible)}>Close</button>
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

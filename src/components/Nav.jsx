import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import "../styles/nav.css"

import AquaNeg from "../assets/burger.svg"
import Union from "../assets/Union.svg"

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
        className={visible ? "drop-down disap" : "drop-down"}
        onClick={() => setVisible(!visible)}
        // onMouseLeave={() => setVisible(false)}
      ></AquaNeg>

      <div className={visible ? "nav-slider" : "nav-slider hide"}>
        <Union className="ex" onClick={() => setVisible(!visible)}>
          Close
        </Union>
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

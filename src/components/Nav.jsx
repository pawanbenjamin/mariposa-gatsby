import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import "../styles/nav.css"

import AquaNeg from "../assets/burger5.svg"
import Union from "../assets/Union.svg"
// import SEO from "./SEO.jsx"

function Nav(props) {
  useEffect(() => {
    console.log(visible)
  })

  const [visible, setVisible] = useState(false)
  const [clicked, setClicked] = useState(false)

  return (
    <nav className="nav">
      {/* <SEO /> */}
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
        <Union
          className={clicked ? "ex pressed" : "ex"}
          onClick={() => {
            setClicked(!clicked)
            setVisible(!visible)
          }}
        ></Union>
        <div className="slide-links">
          <Link className="linky" to="/">
            Home
          </Link>
          <Link className="linky" to="/about">
            About
          </Link>
          <Link className="linky" to="/services">
            Services
          </Link>
          <Link className="linky" duration={2} to="/treatments">
            Treatments
          </Link>
          <Link className="linky" to="/faq">
            FAQ
          </Link>
          <Link className="linky" to="/book">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav

import React from "react"
import { Link } from "gatsby"

import "../styles/footer.css"

function Footer(props) {
  return (
    <div className="footer">
      <div className="links">
        <Link to="/" className="link fl">
          Home
        </Link>
        <Link to="/about" className="link fl">
          About
        </Link>
        <Link to="/treatments" className="link fl">
          Treatments
        </Link>
        <Link to="/services" className="link fl">
          Services
        </Link>
        <Link to="/faq" className="link fl">
          Faq
        </Link>
        <Link to="/contact" className="link fl">
          Contact
        </Link>
      </div>
      <div className="copyright">
        <h3>© 2021 Mariposa Wellness llc</h3>
      </div>
    </div>
  )
}

export default Footer

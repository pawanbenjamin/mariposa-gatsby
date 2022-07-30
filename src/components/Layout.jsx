import React from "react"

import Nav from "./Nav"
import Footer from "./Footer"
import SEO from "../components/SEO"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <SEO />
      <Nav />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

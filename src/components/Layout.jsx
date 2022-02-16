import React from "react"
import { graphql, Link } from "gatsby"

import Nav from "./Nav"
import Footer from "./Footer"
export default function Layout({ children }) {
  return (
    <div className="layout">
      <Nav />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

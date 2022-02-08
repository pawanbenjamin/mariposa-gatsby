import React from "react"
import { graphql, Link } from "gatsby"

import Nav from "./Nav"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Nav />
      <div className="content">{children}</div>
      <footer>
        <p> © 2022 </p>
      </footer>
    </div>
  )
}

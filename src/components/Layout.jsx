import React from "react"
import { graphql, Link } from "gatsby"
import AquaNeg from "../assets/aqua-negative.svg"

import Nav from "./Nav"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <AquaNeg className="services-header" />
      <Nav />
      <div className="content">{children}</div>
      <footer>
        <p> © 2022 </p>
      </footer>
    </div>
  )
}

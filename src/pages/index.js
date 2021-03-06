import React from "react"

import "../styles/global.css"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import FullLogo from "../assets/full-logo.svg"

export default function Home({ data }) {
  return (
    <Layout>
      <div className="home">
        <div className="banner">
          <FullLogo
            src="../assets/bio-pics/full-logo.svg"
            style={{
              maxWidth: "40vw",
            }}
          />
        </div>
        <div className="intro">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Mariposa Wellness I combine a
            variety of manual medicine modalities to treat the whole person.
            With an expertise in Pelvic Health and almost 20 years experience as
            a physical therapist my goal is to provide treatment to enhance your
            overall movement and function while empowering you with knowledge
            regarding your body and particular condition and techniques for self
            care.
          </p>
        </div>
        <div className="button-container">
          <Link to="/book">
            <button>New Patient?</button>
          </Link>
          <a href="https://bchwbooking.clientsecure.me/">
            <button className="app-btn">Book Appt</button>
          </a>
        </div>
      </div>
    </Layout>
  )
}

import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import AquaNeg from "../assets/aqua-negative.svg"

import "../styles/faq.css"

function faq(props) {
  return (
    <Layout>
      <div className="FAQ">
        <AquaNeg loading="eager" className="services-header" />{" "}
        <h1 className="head">Frequently Asked Questions</h1>
        <hr />
        <div className="topic">
          <h1>Insurance</h1>

          <p>
            Mariposa Wellness is an out-of-network outpatient physical therapy
            provider. This means that the client is responsible for paying the
            full fee at the time of service. We will issue a superbill that can
            be submitted by the client to their insurance for direct
            reimbursement. Each insurance company and plan is different. We
            recommend contacting your insurance company directly to find out
            what your coverage is for “outpatient physical therapy.”
          </p>
        </div>
        <div className="topic">
          <h1>Fees</h1>
          <ul className="fact-list">
            <li>
              <h4>90 Min Evaluation: $405</h4>
            </li>
            <li>
              <h4>55 minute treatment: $220</h4>
            </li>
          </ul>
          <h4> Accessibility Rates </h4>
          <p>
            At Mariposa Wellness we understand the exceptional cost of medical
            care especially for folks looking to find solutions for health and
            healing outside of the traditional medical model. Because of this we
            keep 15% of our schedule available for folks needing treatment but
            unable to pay the full cost. If you are interested this option
            please,{" "}
          </p>
          <Link className="contact-link" to="/contact">
            Contact Us!
          </Link>
        </div>
        <div className="topic">
          <h1>Cancellation Policy</h1>
          <p>
            Cancellations must be received with in 48hrs of the scheduled
            appointment. The full session amount will be charged for
            cancellations received later than 48hrs.{" "}
          </p>
        </div>
        <div className="topic">
          <h1>Medicare</h1>
          <p>
            Mariposa Wellness is not a participating provider with medicare. If
            you are a medicare recipient and interested in receiving our
            services, we can see you as a “wellness” client. This means you will
            not be issued a superbill for submitting to insurance.{" "}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default faq

import React, { useRef, useState } from "react"

import emailjs from "@emailjs/browser"
import TextField from "@material-ui/core/TextField"

import Layout from "../components/Layout"
import AquaNeg from "../assets/aqua-negative.svg"

import "../styles/book.css"

function Book(props) {
  const form = useRef()

  const [isEmailSent, setIsEmailSent] = useState(false)

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.GATSBY_SERVICE,
        process.env.GATSBY_TEMPLATE,
        form.current,
        process.env.GATSBY_PUBLIC_KEY
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
      .finally(() => {
        setIsEmailSent(true)
        form.current.reset()
      })
    setTimeout(() => {
      setIsEmailSent(false)
    }, 5000)
  }

  return (
    <Layout>
      <section className="contact">
        <AquaNeg loading="eager" className="services-header" />{" "}
        <div className="existing">
          <h2>
            Returning Patients <br />
            Follow the Link Below
          </h2>
          <a href="https://bchwbooking.clientsecure.me/">
            <button className="book-app-btn">Book Appointment</button>
          </a>
        </div>
        <form ref={form} className="form-cont" onSubmit={sendEmail}>
          <h1>Interested in becoming a New Patient?</h1>
          <h3>
            Please fill out the form below <br />
            and we will get back to you as soon as possible!
          </h3>
          <TextField name="name" type="text" placeholder="Name" />
          <TextField name="email" type="text" placeholder="Email" />
          <TextField name="subject" type="text" placeholder="Subject" />
          <TextField
            name="message"
            type="text-area"
            placeholder="Message"
            multiline
          />
          <button className="book2" size="small" type="submit">
            Submit
          </button>
        </form>
        <div
          className={
            isEmailSent ? "message-conf" : "message-conf  hidden-message"
          }
        >
          <p>
            Thank You for reaching out! <br />
            We will respond as soon as we can.
          </p>
          {/* <AniLink fade duration={1} className="button-container" to="/">
            <button
              onClick={() => {
                console.log("hi")
              }}
              style={{ marginTop: "-30px" }}
            >
              Home
            </button>
          </AniLink> */}
        </div>
      </section>
    </Layout>
  )
}

export default Book

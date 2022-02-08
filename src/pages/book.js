import React, { useRef } from "react"
import { navigate } from "gatsby"
import emailjs from "emailjs-com"
import TextField from "@material-ui/core/TextField"
import { init } from "emailjs-com"
import Layout from "../components/Layout"

init(process.env["USER"])

function Book(props) {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env["SERVICE"],
        process.env["TEMPLATE"],
        form.current,
        process.env["USER"]
      )
      .then(
        result => {
          console.log(result)
        },
        error => {
          console.log(error)
        }
      )
      .finally(() => {
        navigate("/")
      })
  }

  return (
    <Layout>
      <section className="contact">
        {/* <img className="services-header" src={lineAqua} /> */}
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
            and we will get back to you as soon as possible
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
      </section>
    </Layout>
  )
}

export default Book

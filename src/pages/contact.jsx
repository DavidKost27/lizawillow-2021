import React from "react";
import Layout from "../components/Layout/layout";
import { useForm, ValidationError } from "@formspree/react";
import "../styles/contact.scss";

function ContactForm() {
  const [state, handleSubmit] = useForm("xqkwavkg");
  if (state.succeeded) {
    return <p>Thank you for your time.</p>;
  }
  return (
    <div className="form-container ">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form__email input-section"
          />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <div className="input-container">
          <label htmlFor="name">Full Name </label>
          <input
            id="message"
            name="name"
            className="form__name input-section"
          />
        </div>

        <div className="input-container">
          <label htmlFor="name">Your Message</label>
          <textarea
            id="message"
            name="message"
            className="form__message input-section"
          />
        </div>

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          className="form__submit-btn"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default function Contact() {
  return (
    <Layout>
      <div className="contact-page-container">
        <ContactForm />
      </div>
    </Layout>
  );
}

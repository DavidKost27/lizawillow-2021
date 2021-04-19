import React from "react";
import Layout from "../components/Layout/layout";
import { useForm, ValidationError } from "@formspree/react";
import "../styles/contact.scss";

function ContactForm() {
  const [state, handleSubmit] = useForm("meqvozer");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="form-container ">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          className="form__email input-section"
          placeholder="Your Email Adress"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input
          id="message"
          name="name"
          className="form__name input-section"
          placeholder="Full name"
        />
        <textarea
          id="message"
          name="message"
          className="form__message input-section"
          placeholder="Type your proposition..."
        />
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
      <div>This is Contact Page</div>
      <ContactForm />
    </Layout>
  );
}

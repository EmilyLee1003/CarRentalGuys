import React from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./style.css";
import emailjs from "emailjs-com";

function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xo7dqsn",
        "template_12028rt",
        e.target,
        "user_h2B4Q5dBdcSMEw95x0ZBL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>First Name</label>
      <input type="text" name="firstName" />
      <label>Last Name</label>
      <input type="text" name="lastName" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Phone Number</label>
      <input type="text" placeholder="(xxx)xxx-xxxx" name="phoneNumber" />
      <label>Any questions?</label>
      <textarea name="message" />
      <input type="submit" value="Send" onSubmit={sendEmail} />
    </form>
  );
}

export default ContactForm;

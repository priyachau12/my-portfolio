import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp, BsMessenger } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aou2du9",
        "template_mkj6j54",
        form.current,
        "Jw9B0qYMOy8tuS3JP"
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
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>priyachaurasiya730@gmail.com </h5>
            <a href="mailto:priyachaurasiya730@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Instagram Messenger</h4>
            <h5>priyachaurasiyaa</h5>
            <a
              href="https://www.instagram.com/priyachaurasiyaa/"
              target="_blank"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a href="" target="_blank">
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

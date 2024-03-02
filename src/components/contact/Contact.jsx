import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_toiyont", "template_pj0483k", form.current, {
        publicKey: "kjeZiGco-L4yKleKS",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mbellanbil@gmail.com</h5>
            <a href="mailto:mbellanbil@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>Click the link below</h5>
            <a href="https://wa.me/15719923622" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Let's Connect!</h5>
            <a href="https://www.linkedin.com/in/mona-nabil" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaGithub className="contact__option-icon" />
            <h4>Github</h4>
            <h5>Check out my Github!</h5>
            <a href="https://github.com/Mona-Nabil" target="_blank">
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        {/* <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="" placeholder="Your Full Name" required />
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
        </form> */}
      </div>
    </section>
  );
};

export default Contact;

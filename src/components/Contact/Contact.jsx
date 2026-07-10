import React, { useState } from "react";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
  CheckIcon,
} from "../../icons.jsx";

import "./Contact.css";

// Background
import ContactBg from "../asset/MainImg/bg.png";

export default function Contact({ full = false }) {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clean, formatted number with no spaces or symbols
    const whatsappNumber = "919868777148";

    const textMessage = `*New Appointment Request — Arasu Medical Centre*

👤 Name: ${form.name.trim()}
📞 Phone: ${form.phone.trim()}
✉️ Email: ${form.email.trim()}

📝 Message:
${form.message.trim()}`;

    // Safely encode parameters to prevent URL corruption
    const params = new URLSearchParams({
      phone: whatsappNumber,
      text: textMessage,
    });

    // Using the official WhatsApp API link structure
    const url = `https://api.whatsapp.com/send?${params.toString()}`;

    // Direct redirection to avoid browser popup blockers
    window.location.href = url;

    setSubmitted(true);
  };

  return (
    <section
      className="section contact"
      id="appointment"
      style={{
        backgroundImage: `url(${ContactBg})`,
      }}
    >
      <div className="container">

        {!full && (
          <div className="section-head">
            <div
              className="eyebrow"
              style={{ margin: "0 auto 16px" }}
            >
              <span className="dot"></span>
              Get In Touch
            </div>

            <h2 className="section-title">
              Book an appointment,
              <span> talk to our team.</span>
            </h2>
          </div>
        )}

        <div className="contact-grid">

          {/* LEFT SIDE - CONTACT INFO */}
          <div className="contact-info">

            <div className="contact-info-item">
              <div className="contact-icon">
                <PhoneIcon size={18} />
              </div>
              <div>
                <h4>Call Us</h4>
                <a href="tel:+919868777148">+91 9868777148 (Main)</a>
                <a href="tel:+919842250912">+91 98422 50912</a>
                <a href="tel:+917904772383">+91 79047 72383</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <MailIcon size={18} />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:arasumedicaltiruppur@gmail.com">
                  arasumedicaltiruppur@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <PinIcon size={18} />
              </div>
              <div>
                <h4>Location</h4>
                <p>Arasu Medical Centre, Tiruppur, Tamil Nadu</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <ClockIcon size={18} />
              </div>
              <div>
                <h4>Working Hours</h4>
                <p>
                  OPD: Monday - Sunday, 8:00 AM - 9:00 PM
                  <br />
                  Emergency Care: Open 24/7
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            aria-label="Book an appointment"
          >

            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">
                  <CheckIcon size={28} />
                </div>
                <h3>Request Sent</h3>
                <p>
                  Your appointment request has been sent. Our team will get back to you shortly.
                </p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      phone: "",
                      email: "",
                      message: "",
                    });
                  }}
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us briefly about your health concern"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Book Appointment
                </button>
              </>
            )}

          </form>

        </div>

        {/* MAP SECTION */}
        <div className="contact-map">
          <iframe
            title="Arasu Medical Centre location map"
            src="https://maps.google.com/maps?q=Tiruppur%2C%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="360"
            style={{ border: 0, borderRadius: "var(--radius-lg)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
import { useState } from "react";
import { IoMailOutline, IoPhonePortraitOutline, IoLocationOutline, IoSendOutline } from "react-icons/io5";
import { profile } from "../data/profileData";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "website visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  return (
    <article className="contact active">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox">
        <iframe
          title="location map"
          src="https://www.google.com/maps?q=Ambalangoda,+Sri+Lanka&output=embed"
          width="100%"
          height="280"
          loading="lazy"
        />
      </section>

      <ul className="contact-summary">
        <li>
          <div className="icon-box">
            <IoMailOutline />
          </div>
          <div>
            <p className="contact-title">Email</p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </li>
        <li>
          <div className="icon-box">
            <IoPhonePortraitOutline />
          </div>
          <div>
            <p className="contact-title">Phone</p>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          </div>
        </li>
        <li>
          <div className="icon-box">
            <IoLocationOutline />
          </div>
          <div>
            <p className="contact-title">Location</p>
            <address>{profile.location}</address>
          </div>
        </li>
      </ul>

      <section className="contact-form">
        <h3 className="h3 form-title">Send a Message</h3>

        <form onSubmit={handleSubmit} className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            rows="6"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" className="btn form-btn" disabled={!isValid}>
            <IoSendOutline /> Send Message
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;

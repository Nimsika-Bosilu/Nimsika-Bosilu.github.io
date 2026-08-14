import { useState } from "react";
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoLocationOutline,
  IoChevronDown,
  IoLogoGithub,
  IoLogoLinkedin,
  IoGlobeOutline,
} from "react-icons/io5";
import { profile } from "../data/profileData";
import avatarImg from "../assets/images/avatar.jpg";
import "./Sidebar.css";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <aside className={`sidebar ${isActive ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={avatarImg} alt={profile.name} width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title={profile.name}>
            {profile.name}
          </h1>
          <p className="title">{profile.title}</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setIsActive((prev) => !prev)}
        >
          <span>Contact Info</span>
          <IoChevronDown className={`icon ${isActive ? "flip" : ""}`} />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator" />

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoMailOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href={`mailto:${profile.email}`} className="contact-link">
                {profile.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoPhonePortraitOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact-link">
                {profile.phone}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>{profile.location}</address>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoGlobeOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Website</p>
              <a
                href={profile.website}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                {profile.website.replace("https://", "")}
              </a>
            </div>
          </li>
        </ul>

        <div className="separator" />

        <ul className="social-list">
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <IoLogoGithub />
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <IoLogoLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

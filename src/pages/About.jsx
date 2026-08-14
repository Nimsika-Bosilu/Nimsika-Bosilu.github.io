import {
  IoLayersOutline,
  IoServerOutline,
  IoHardwareChipOutline,
  IoCogOutline,
} from "react-icons/io5";
import { aboutText, services } from "../data/profileData";
import "./About.css";

const ICONS = {
  "layers-outline": IoLayersOutline,
  "server-outline": IoServerOutline,
  "hardware-chip-outline": IoHardwareChipOutline,
  "cog-outline": IoCogOutline,
};

const About = () => {
  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      <section className="about-text">
        {aboutText.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm Doing</h3>

        <ul className="service-list">
          {services.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <li key={service.title} className="service-item">
                <div className="service-icon-box">
                  <Icon />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">{service.title}</h4>
                  <p className="service-item-text">{service.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
};

export default About;

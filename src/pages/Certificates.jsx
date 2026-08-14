import { IoTrophyOutline, IoRibbonOutline, IoDocumentTextOutline } from "react-icons/io5";
import { achievements, certificates } from "../data/profileData";
import "./Certificates.css";

const PLACEHOLDER_COUNT = 3;

const Certificates = () => {
  return (
    <article className="certificates active">
      <header>
        <h2 className="h2 article-title">Certificates &amp; Achievements</h2>
      </header>

      <section className="achievements">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoTrophyOutline />
          </div>
          <h3 className="h3">Achievements</h3>
        </div>

        <ul className="achievement-list">
          {achievements.map((item, index) => (
            <li key={index} className="achievement-item">
              <div className="achievement-icon">
                <IoRibbonOutline />
              </div>
              <div>
                <h4 className="h4 achievement-title">{item.title}</h4>
                <p className="achievement-place">{item.place}</p>
              </div>
              <span className="achievement-year">{item.year}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="certificates-section">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoDocumentTextOutline />
          </div>
          <h3 className="h3">Certificates</h3>
        </div>

        {certificates.length === 0 ? (
          <>
            <p className="section-text certificates-note">
              Certificates will be added here soon.
            </p>
            <ul className="certificate-grid">
              {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
                <li key={index} className="certificate-card placeholder">
                  <IoDocumentTextOutline />
                  <span>Coming soon</span>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <ul className="certificate-grid">
            {certificates.map((cert) => (
              <li key={cert.title} className="certificate-card">
                <figure className="certificate-thumb">
                  <img src={cert.image} alt={cert.title} />
                </figure>
                <div className="certificate-info">
                  <h4 className="h4">{cert.title}</h4>
                  <p>{cert.issuer}</p>
                  <span>{cert.date}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
};

export default Certificates;

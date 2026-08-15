import { useState } from "react";
import { IoTrophyOutline, IoRibbonOutline, IoDocumentTextOutline, IoClose } from "react-icons/io5";
import { achievements, certificates } from "../data/profileData";
import "./Certificates.css";

const PLACEHOLDER_COUNT = 3;

// Eagerly resolve every certificate image so entries in profileData.js can
// reference them by filename alone.
const certImages = import.meta.glob("../assets/images/certificates/*.png", {
  eager: true,
  import: "default",
});

const resolveImage = (filename) =>
  certImages[`../assets/images/certificates/${filename}`];

const Certificates = () => {
  const [selected, setSelected] = useState(null);

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
              <li key={cert.title}>
                <button
                  className="certificate-card"
                  onClick={() => setSelected(cert)}
                >
                  <figure className="certificate-thumb">
                    <img
                      src={resolveImage(cert.image)}
                      alt={cert.title}
                      loading="lazy"
                    />
                  </figure>
                  <div className="certificate-info">
                    <h4 className="h4">{cert.title}</h4>
                    <p>{cert.issuer}</p>
                    <span>{cert.date}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div
            className="modal-box certificate-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <IoClose />
            </button>

            <img
              src={resolveImage(selected.image)}
              alt={selected.title}
              className="certificate-modal-img"
            />

            <div className="modal-content">
              <h3 className="modal-title">{selected.title}</h3>
              <p className="modal-subtitle">{selected.issuer}</p>
              <p className="modal-type">{selected.date}</p>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Certificates;

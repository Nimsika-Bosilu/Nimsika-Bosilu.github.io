import { useState } from "react";
import { IoClose, IoLogoGithub, IoImageOutline } from "react-icons/io5";
import { projects, projectCategories, categoryLabels } from "../data/profileData";
import "./Portfolio.css";

// Eagerly resolve every project image so entries in profileData.js can
// reference them by filename alone.
const projectImages = import.meta.glob("../assets/images/projects/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

const resolveImage = (filename) => {
  const match = Object.keys(projectImages).find((path) => path.endsWith(`/${filename}`));
  return match ? projectImages[match] : null;
};

const ProjectThumb = ({ project, className = "" }) => {
  const src = project.image ? resolveImage(project.image) : null;

  if (src) {
    return (
      <figure className={`project-thumb ${className}`}>
        <img src={src} alt={project.title} loading="lazy" />
      </figure>
    );
  }

  return (
    <figure className={`project-thumb placeholder ${className}`}>
      <IoImageOutline />
      <span>Photo coming soon</span>
    </figure>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {projectCategories.map((cat) => (
            <li key={cat}>
              <button
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {categoryLabels[cat]}
              </button>
            </li>
          ))}
        </ul>

        <ul className="project-list">
          {filtered.map((project) => (
            <li key={project.id} className="project-item">
              <button
                className="project-card"
                onClick={() => setSelected(project)}
              >
                <ProjectThumb project={project} />

                <div className="project-card-body">
                  <p className="project-category">
                    {categoryLabels[project.category]} · {project.year}
                  </p>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close">
              <IoClose />
            </button>

            <ProjectThumb project={selected} className="modal-thumb" />

            <div className="modal-content">
              <p className="project-category">
                {categoryLabels[selected.category]} · {selected.year}
              </p>
              <h3 className="modal-title">{selected.title}</h3>
              <p className="modal-subtitle">{selected.subtitle}</p>
              <p className="modal-type">{selected.type}</p>

              <p className="modal-description">{selected.description}</p>

              <ul className="modal-stack">
                {selected.stack.map((tech) => (
                  <li key={tech} className="tag-item">
                    {tech}
                  </li>
                ))}
              </ul>

              <a
                href={selected.link}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <IoLogoGithub /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Portfolio;

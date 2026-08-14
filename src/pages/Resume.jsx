import { IoSchoolOutline, IoRibbonOutline } from "react-icons/io5";
import { education, leadership, skills, otherSkills } from "../data/profileData";
import "./Resume.css";

const Resume = () => {
  return (
    <article className="resume active">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoSchoolOutline />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {education.map((item) => (
            <li key={item.title} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span className="timeline-place">{item.place}</span>
              <span>{item.time}</span>
              <p className="timeline-text">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoRibbonOutline />
          </div>
          <h3 className="h3">Leadership &amp; Activities</h3>
        </div>

        <ol className="timeline-list">
          {leadership.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span className="timeline-place">{item.place}</span>
              {item.time && <span>{item.time}</span>}
              {item.text && <p className="timeline-text">{item.text}</p>}
            </li>
          ))}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>

        <ul className="skills-list content-card">
          {skills.map((skill) => (
            <li key={skill.name} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.percent}>{skill.percent}%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="other-skills">
        <h3 className="h3 skills-title">Also Working With</h3>
        <ul className="tag-list">
          {otherSkills.map((tag) => (
            <li key={tag} className="tag-item">
              {tag}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Resume;

import { skillsByLanguage } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";

// Lists technical areas; edit entries in src/data/portfolio.ts.
export function Skills() {
  const { language } = useLanguage();
  const skills = skillsByLanguage[language];
  return (
    <section className="skills section" id="skills">
      <div className="section-heading compact">
        <p className="section-index">
          02 / {language === "fi" ? "Osaaminen" : "Skills"}
        </p>
        <h2>
          {language === "fi" ? "Tekninen osaaminen" : "Technical toolkit"}
        </h2>
      </div>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-group" key={group.label}>
            <p>{group.label}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

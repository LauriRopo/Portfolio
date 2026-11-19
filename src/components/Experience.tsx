import { experience } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";

// Work and internship timeline.
export function Experience() {
  const { language } = useLanguage();
  const isFinnish = language === "fi";
  const visibleExperience = isFinnish
    ? [
        {
          ...experience[0],
          role: "Kesätyöntekijä",
          points: [
            "Varaston hallinta",
            "Logistiikka",
            "Myynnin ja markkinoinnin tuki",
          ],
        },
        {
          ...experience[1],
          role: "Ohjelmistokehityksen harjoittelija",
          points: [
            "ESP8266-pohjainen langaton ajanottojärjestelmä",
            "Android-sovellus tulosten seurantaan",
          ],
        },
        {
          ...experience[2],
          role: "Ohjelmistokehityksen harjoittelija",
          points: [
            "React Native -sovelluskehitys",
            "API-integraatiot",
            "React-pohjainen kassaprototyyppi",
          ],
        },
      ]
    : experience;
  return (
    <section className="experience section" id="experience">
      <div className="section-heading compact">
        <p className="section-index">
          04 / {isFinnish ? "Työkokemus" : "Experience"}
        </p>
        <h2>{isFinnish ? "Missä olen työskennellyt" : "Where I've worked"}</h2>
      </div>
      <div className="timeline">
        {visibleExperience.map((item) => (
          <article className="timeline-item" key={item.company}>
            <p className="timeline-period">{item.period}</p>
            <div className="timeline-main">
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import { ArrowUpRight, CodeXml } from "lucide-react";
import { projects } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";

// Project cards with descriptions and repository links.
export function Projects() {
  const { language } = useLanguage();
  const isFinnish = language === "fi";
  const bilingualProjects = {
    en: projects,
    fi: [
      {
        ...projects[0],
        title: "Langaton ajanottosysteemi",
        description:
          "Suunnittelin ja toteutin ESP8266-mikrokontrollereilla toimivan langattoman ajanottojärjestelmän sekä Android-sovelluksen mittaustulosten seurantaan ja asetukisne määrittämiseen.",
        meta: "Savonia-ammattikorkeakoulu · Työssäoppiminen",
      },
      {
        ...projects[1],
        title: "React Native -mobiilisovellus",
        description:
          "Toteutin Kirppari-Kalle mobiilisovellukseen uuden React Native -käyttöliittymän ja tuoteinformaation haun kahdesta eri API:sta.",
        meta: "Koodi-Kalle · Työssäoppiminen",
      },
      {
        ...projects[2],
        title: "Itsepalvelukassan prototyyppi",
        description:
          "Rakensin React-pohjaisen käyttöliittymäprototyypin itsepalvelukassajärjestelmälle.",
        meta: "Koodi-Kalle · Työssäoppiminen",
      },
      {
        ...projects[3],
        title: "FinlandDoc AI",
        description:
          "Suomenkielinen dokumenttihaku, joka käyttää BM25-algoritmia laadun mukaisten tekstikatkelmien löytämiseen.",
        meta: "Henkilökohtainen portfoliosovellus · Python",
      },
      {
        ...projects[4],
        title: "Morning Receipt",
        description:
          "Python-sovellus, joka tulostaa päivän säätiedot ja NHL-tulokset USB-termalipainetulostimelle. Joku joskus kysyi: ”Miksi? Mitä tuolla tekee?” No, miksi ei? Onhan se nyt ihan hyvä tietää päivän sää, ja NHL-tuloksetkin kiinnostavat!",
        meta: "Henkilökohtainen apusovellus · Python",
      },
    ],
  };
  const visibleProjects = bilingualProjects[language];
  return (
    <section className="projects section" id="projects">
      <div className="section-heading projects-heading">
        <p className="section-index">03 / {isFinnish ? "Työ" : "Work"}</p>
        <h2>{isFinnish ? "Projektit" : "Projects"}</h2>
      </div>
      <div className="project-list">
        {visibleProjects.map((project) => (
          <article className="project" key={project.title}>
            <div className="project-info">
              <p className="project-number">{project.number}</p>
              <div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-meta">{project.meta}</p>
                <ul className="tech-list"                 aria-label={isFinnish ? "Käytetyt teknologiat" : "Technologies used"}>
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                {"github" in project && (
                  <a
                    className="github-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CodeXml size={15} /> GitHub <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

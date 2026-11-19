import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ArrowUp, Fish } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Top navigation and a back-to-top action that appears after scrolling.
export function Header() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [joke, setJoke] = useState<string | null>(null);
  const [jokeLeaving, setJokeLeaving] = useState(false);
  const jokeTimer = useRef<number | null>(null);
  const removeTimer = useRef<number | null>(null);
  const { language, setLanguage } = useLanguage();

  // Keep the joke feature stateful so repeated clicks never show the same joke.
  const jokes = [
    "Mitä kuha sanoi toiselle kuhalla? – Kuha nähdään!",
    "Miksi kuha ei koskaan riitele? – Se antaa asioiden mennä virran mukana.",
    "Mitä kuha sanoi, kun se jäi koukkuun? – Nyt taisin rakastua!",
    "Miksi kuha ei käytä Googlea? – Se tietää jo kaiken vedestä.",
    "Mitä kuha sanoi hauelle? – Älä ole noin haukkuva!",
    "Miksi kuha ei käy töissä? – Se elää päivä kerrallaan.",
    "Mikä on kuhan lempisana? – Kuha!",
    "Mitä kuha sanoi, kun toinen kala kysyi kuulumisia? – Ihan kalamaisesti menee!",
    "Miksi kuha ei tykkää juhlista? – Siellä on aina joku verkostoitumassa.",
    "Mitä kuha tekee, kun sillä on tylsää? – Se ui ympyrää.",
    "Miksi kuha ei koskaan eksy? – Se tuntee vedet kuin omat suomunsa.",
    "Mitä kuha sanoi, kun sitä kehuttiin? – Älä nyt liikaa kehu, menee suomut silmille!",
    "Miksi kuha ei halua mennä naimisiin? – Se pelkää joutuvansa verkkoon loppuiäkseen.",
    "Mitä kuha sanoi kalastajalle? – Eikö me voitaisi vain jutella?",
    "Miksi kuha on hyvä ystävä? – Se ei koskaan jätä toista kuiville.",
    "Mitä kuha sanoi, kun siltä kysyttiin ikää? – Olen vielä aika nuori kala.",
    "Miksi kuha ei osaa pitää salaisuuksia? – Sillä on aina joku kiduksissa kiinni.",
    "Mikä on kuhan suosikkielokuva? – Nemoa etsimässä.",
    "Mitä kuha sanoi, kun se voitti lotossa? – Nyt on kyllä kalaonni kohdallaan!",
    "Miksi kuha ei tykkää matematiikasta? – Se ei ymmärrä kalakulmia.",
    "Mitä kuha sanoi, kun se näki peilikuvansa? – Onpas siinä komea saalis!",
    "Miksi kuha ei koskaan valehtele? – Se ei halua jäädä haaviin.",
    "Mitä kuha sanoi, kun vesi oli liian kylmää? – Nyt menee vähän yli hilseen!",
    "Miksi kuha ei käytä hissiä? – Se ui mieluummin pintaan.",
    "Mitä kuha sanoi, kun joku käski sen olla hiljaa? – Turpa kiinni vai kidukset kiinni?",
  ];

  const showRandomJoke = () => {
    if (jokeTimer.current) window.clearTimeout(jokeTimer.current);
    if (removeTimer.current) window.clearTimeout(removeTimer.current);

    const choices = joke
      ? jokes.filter((item) => item !== joke)
      : jokes;
    setJoke(choices[Math.floor(Math.random() * choices.length)]);
    setJokeLeaving(false);

    jokeTimer.current = window.setTimeout(() => {
      setJokeLeaving(true);
      removeTimer.current = window.setTimeout(() => {
        setJoke(null);
        setJokeLeaving(false);
      }, 420);
    }, 5200);
  };

  const scrollToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 520);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  useEffect(() => {
    return () => {
      if (jokeTimer.current) window.clearTimeout(jokeTimer.current);
      if (removeTimer.current) window.clearTimeout(removeTimer.current);
    };
  }, []);

  return (
    <>
      <header className="topbar">
        <nav
          aria-label={language === "fi" ? "Päänavigaatio" : "Main navigation"}
        >
          <a href="#why-us">{language === "fi" ? "Hakemus" : "Application"}</a>
          <a href="#projects">{language === "fi" ? "Projektit" : "Projects"}</a>
          <a href="#experience">
            {language === "fi" ? "Kokemus" : "Experience"}
          </a>
          <a href="#contact">{language === "fi" ? "Yhteys" : "Contact"}</a>
        </nav>
        <div
          className="language-switch"
          aria-label={
            language === "fi" ? "Kielen valinta" : "Language selection"
          }
        >
          <button
            type="button"
            className={language === "fi" ? "active" : ""}
            onClick={() => setLanguage("fi")}
            aria-pressed={language === "fi"}
          >
            FI
          </button>
          <span aria-hidden="true">/</span>
          <button
            type="button"
            className={language === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
          >
            EN
          </button>
        </div>
        <div className="hanging-joke">
          <span className="hanging-joke-cord" aria-hidden="true" />
          <button
            type="button"
            aria-expanded={joke !== null}
            aria-label={language === "fi" ? "Näytä vitsi" : "Show a joke"}
            onClick={showRandomJoke}
          >
            <Fish size={20} />
            <span>{language === "fi" ? "Vitsi" : "Joke"}</span>
          </button>
          {joke && (
            <p
              className={`hanging-joke-bubble ${jokeLeaving ? "leaving" : ""}`}
              aria-live="polite"
              key={joke}
            >
              {joke}
            </p>
          )}
        </div>
      </header>
      <a
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        href="#top"
        aria-label={language === "fi" ? "Takaisin sivun alkuun" : "Back to top"}
        onClick={scrollToTop}
      >
        <ArrowUp size={15} />
        <span>{language === "fi" ? "Takaisin alkuun" : "Back to top"}</span>
      </a>
    </>
  );
}

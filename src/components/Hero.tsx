import { ArrowDown, CodeXml, Mail, Network } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Introductory area and main call-to-action buttons.
export function Hero() {
  const { language } = useLanguage();
  const isFinnish = language === "fi";
  return (
    <section className="hero section" id="top">
      <div className="depth-field">
        <span className="contour contour-one" />
        <span className="contour contour-two" />
        <span className="contour contour-three" />
        <svg className="fishing-boat" viewBox="0 0 150 260" role="presentation">
          <ellipse className="boat-wake" cx="75" cy="156" rx="52" ry="88" />
          <path
            className="boat-hull"
            d="M75 18 C98 52 109 92 104 178 C101 220 88 242 75 248 C62 242 49 220 46 178 C41 92 52 52 75 18Z"
          />
          <path
            className="boat-deck"
            d="M75 42 C88 68 94 104 91 170 C89 196 82 218 75 224 C68 218 61 196 59 170 C56 104 62 68 75 42Z"
          />
          <path className="boat-seat" d="M58 112 H92 V122 H58Z" />
          <path className="boat-seat" d="M56 158 H94 V168 H56Z" />
          <path className="boat-seat" d="M60 198 H90 V207 H60Z" />
          <path className="boat-oar" d="M36 128 L5 151 M114 128 L145 151" />
          <ellipse className="boat-oar-blade" cx="5" cy="151" rx="11" ry="5" />
          <ellipse
            className="boat-oar-blade"
            cx="145"
            cy="151"
            rx="11"
            ry="5"
          />
          <circle className="boat-detail" cx="75" cy="117" r="3" />
          <circle className="boat-detail" cx="75" cy="163" r="3" />
          <path className="boat-centerline" d="M75 28 V226" />
        </svg>
      </div>
      <div className="hero-content">
        <p className="eyebrow">
          <span className="status-dot" />{" "}
          {isFinnish
            ? "Avoinna mahdollisuuksille"
            : "Available for opportunities"}
        </p>
        <h1>
          <span>Lauri Roponen.</span>
        </h1>
        <p className="hero-role">
          {isFinnish ? "Ohjelmistokehittäjä" : "Software Developer"}
        </p>
        <p className="hero-intro">
          {isFinnish
            ? "Kuopiosta kotoisin oleva tietotekniikan insinööri, jolle ei riitä kuha(n) toimii. (Hah kuha vitsi)"
            : "Information technology engineer from Kuopio who enjoys turning practical problems into useful software."}
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            {isFinnish ? "Katso projektit" : "View My Projects"}{" "}
            <ArrowDown size={17} />
          </a>
          <a className="button button-secondary" href="#contact">
            {isFinnish ? "Ota yhteyttä" : "Contact Me"}
          </a>
        </div>
        <div className="hero-socials" aria-label="Professional profiles">
          <a
            href="https://github.com/LauriRopo"
            target="_blank"
            rel="noreferrer"
          >
            <CodeXml size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lauri-roponen/"
            target="_blank"
            rel="noreferrer"
          >
            <Network size={16} /> LinkedIn
          </a>
          <a href="mailto:lauriroponen@gmail.com">
            <Mail size={16} /> Email
          </a>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight, CodeXml, Mail, Network } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Contact links and closing call-to-action.
export function Contact() {
  const { language } = useLanguage();
  const isFinnish = language === "fi";
  return (
    <section className="contact section" id="contact">
      <p className="section-index">06 / {isFinnish ? "Yhteys" : "Contact"}</p>
      <div className="contact-layout">
        <div className="contact-copy">
          <h2>
            {isFinnish
              ? "Olisiko teillä minulle paikkaa?"
              : "Could you make room for me?"}
            <br />
            {isFinnish
              ? "Lupaan kertoa parhaat kalavitsit."
              : "I promise to bring the best fish jokes."}
          </h2>
          <a className="contact-cta" href="mailto:lauriroponen@gmail.com">
            <span>{isFinnish ? "Jutellaan." : "Let's talk."}</span>
            <ArrowUpRight size={28} />
          </a>
          <div className="contact-links">
            <a href="mailto:lauriroponen@gmail.com">
              <Mail size={18} /> lauriroponen@gmail.com
            </a>
            <a
              href="https://github.com/LauriRopo"
              target="_blank"
              rel="noreferrer"
            >
              <CodeXml size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/lauri-roponen/"
              target="_blank"
              rel="noreferrer"
            >
              <Network size={18} /> LinkedIn
            </a>
          </div>
        </div>
        <img
          className="contact-portrait"
          src={`${import.meta.env.BASE_URL}lauri-roponen.png`}
          alt={isFinnish ? "Lauri Roponen" : "Lauri Roponen"}
        />
      </div>
    </section>
  );
}

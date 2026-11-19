import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Association leadership and responsibility section.
export function Leadership() {
  const { language } = useLanguage();
  const isFinnish = language === "fi";
  return (
    <section className="leadership section" id="leadership">
      <div className="leadership-mark" aria-hidden="true">
        <BriefcaseBusiness size={28} />
      </div>
      <div className="section-heading compact">
        <p className="section-index">
          05 / {isFinnish ? "Vastuu" : "Leadership"}
        </p>
        <h2>{isFinnish ? "Muut vastuut" : "Leadership"}</h2>
      </div>
      <div className="leadership-content">
        <p className="leadership-role">
          {isFinnish ? "Puheenjohtaja · KINRA ry" : "Chairman · KINRA ry"}
        </p>
        <span className="active">2026 — 2027</span>
        <div
          className="leadership-periods"
          aria-label={isFinnish ? "Toimikaudet" : "Terms"}
        ></div>
        <p>
          {isFinnish
            ? "Yhdistyksen johtaminen ja kehittäminen, hallituksen toiminnan koordinointi, tapahtumien suunnittelu sekä viestinnän ja yhteistyön tukeminen jäsenten ja sidosryhmien kanssa."
            : "Leading and developing the association, coordinating board work, planning events and activities, and supporting communication and collaboration with members and stakeholders."}
        </p>
        <div className="responsibility-tags">
          <span>{isFinnish ? "Tiimin johtaminen" : "Team leadership"}</span>
          <span>{isFinnish ? "Tapahtumasuunnittelu" : "Event planning"}</span>
          <span>
            {isFinnish ? "Sidosryhmäyhteistyö" : "Stakeholder collaboration"}
          </span>
          <span>{isFinnish ? "Jäsenhallinta" : "Membership management"}</span>
        </div>
        <p className="leadership-role">
          {isFinnish
            ? "Tapahtuma- ja viestintävastaava · KINRA ry"
            : "Event and Communications Lead · KINRA ry"}
        </p>
        <span className="active">2025 — 2026</span>
        <p>
          {isFinnish
            ? "Yhdistyksen johtaminen ja kehittäminen, hallituksen toiminnan koordinointi, tapahtumien suunnittelu sekä viestinnän ja yhteistyön tukeminen jäsenten ja sidosryhmien kanssa."
            : "Planning events and communications, coordinating association activities and maintaining clear cooperation with members and partners."}
        </p>
        <div className="responsibility-tags">
          <span>
            {isFinnish ? "Kokonaisuuksien suunnittelu" : "Integrated planning"}
          </span>
          <span>{isFinnish ? "Tapahtumasuunnittelu" : "Event planning"}</span>
          <span>
            {isFinnish ? "Viestintätaidot" : "Communication"}
          </span>
          <span>
            {isFinnish ? "Visuaalista silmää" : "Visual design"}
          </span>
        </div>

        <p className="leadership-role">
          {isFinnish
            ? "Tapahtuma- ja jäsenvastaava · KINRA ry"
            : "Events and Membership Lead · KINRA ry"}
        </p>
        <span className="active">2024 — 2025</span>
        <p>
          {isFinnish
            ? "Yhdistyksen johtaminen ja kehittäminen, hallituksen toiminnan koordinointi, tapahtumien suunnittelu sekä viestinnän ja yhteistyön tukeminen jäsenten ja sidosryhmien kanssa."
            : "Organizing member activities, supporting events and helping the association communicate effectively with members and partners."}
        </p>
        <div className="responsibility-tags">
          <span>
            {isFinnish ? "Kokonaisuuksien suunnittelu" : "Integrated planning"}
          </span>
          <span>{isFinnish ? "Tapahtumasuunnittelu" : "Event planning"}</span>
          <span>
            {isFinnish ? "Viestintätaidot" : "Communication"}
          </span>
          <span>
            {isFinnish ? "Visuaalista silmää" : "Visual design"}
          </span>
        </div>
        <a
          className="leadership-link"
          href="https://kinra.fi"
          target="_blank"
          rel="noreferrer"
        >
          <span>kinra.fi</span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

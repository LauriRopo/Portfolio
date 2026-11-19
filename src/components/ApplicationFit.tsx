import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function ApplicationFit() {
  const { language } = useLanguage();
  const isFinnish = language === "fi";

  return (
    <section className="application-fit section" id="why-us">
      <div className="section-heading compact">
        <p className="section-index">
          01 / {isFinnish ? "Hakemus" : "Application"}
        </p>
        <h2>
          {isFinnish
            ? "Miksi haluan juuri teille?"
            : "Why I want to work with you"}
        </h2>
      </div>
      <div className="fit-grid">
        <article>
          <p className="fit-number">01</p>
          <h3>
            {isFinnish
              ? "Pidän rohkeasta asenteesta"
              : "I like the bold attitude"}
          </h3>
          <p>
            {isFinnish
              ? "Harvoin kun avaan yrityksen verkkosivut reaktioni on 'Vau nyt on tyylikästä, ammattitaitoista mutta silti hauskaa'. Minusta verkkosivujen tulee kuvastaa yrityksen omaa ilmettä, eikä aina käyttää samaa pohjaa kuin kaikki muut.   "
              : "When I open a company website, I rarely think 'wow, this is stylish, professional and fun.' I believe a website should reflect a brand's own identity instead of using the same formula as everyone else."}
          </p>
        </article>
        <article>
          <p className="fit-number">02</p>
          <h3>
            {isFinnish
              ? "Yhdistän tekemisen ja rennon fiiliksen"
              : "I combine execution with a relaxed attitude"}
          </h3>
          <p>
            {isFinnish
              ? "Olen aina ollut sitä mieltä, että työ tehdään niin hyvin kuin vain pystyy. Toinen tärkeä asia minusta työssä on pitää myös hauskaa. Työkavereiden kanssa vitsien heitto työpäivän aikana ja rennon ilmapiirin ylläpitäminen. "
              : "I believe work should always be done as well as possible. At the same time, enjoying the process matters: sharing a joke with colleagues and helping maintain a relaxed, positive atmosphere make better work."}
          </p>
        </article>
        <article>
          <p className="fit-number">03</p>
          <h3>
            {isFinnish
              ? "Opin nopeasti ja pidä siitä mitä teen"
              : "I learn fast and care about my work"}
          </h3>
          <p>
            {isFinnish
              ? "Vaikka minulla ei vielä ole sitä viiden vuoden kokemusta :) Uskon kuitenkin, että nykyinen osaamiseni antaa minulle hyvän pohjan tähän työhön. Pidän siitä, mitä teen, ja suhtaudun avoimin mielin tulevaisuuteen, vaikka tekoälyn nopea kehitys aiheuttaakin hieman epävarmuutta juuri valmistuvalle tietotekniikan insinöörille. "
              : "I may not have five years of experience yet, but my current skills give me a solid foundation for this role. I enjoy what I do and approach the future with an open mind, even though rapid AI development brings uncertainty as I prepare to graduate."}
          </p>
        </article>
      </div>
      <a className="fit-proof" href="#projects">
        <span>
          {isFinnish
            ? "Katso miten toteutan ideat"
            : "See how I turn ideas into work"}
        </span>
        <ArrowUpRight size={22} />
      </a>
    </section>
  );
}

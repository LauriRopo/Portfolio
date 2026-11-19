// Simple site footer.
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { language } = useLanguage();
  return (
    <footer>
      <p>© 2026 Lauri Roponen</p>
      <p>
        {language === "fi"
          ? "Tehty huolella Kuopiossa kotona tietokoneella"
          : "Built with care on a computer in Kuopio"}
      </p>
    </footer>
  );
}

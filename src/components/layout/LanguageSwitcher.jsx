import { useEffect, useRef, useState } from "react";
import { useI18n } from "../../lang/i18n";

const LANGUAGES = ["es", "en"];

function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleOutside = (event) => {
      if (!wrapperRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className={`language-fab ${open ? "is-open" : ""}`.trim()} ref={wrapperRef}>
      <button
        type="button"
        className="language-fab__trigger"
        aria-label={t("language.switchLabel")}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="language-fab__label">{t("language.switchLabel")}</span>
        <span className="language-fab__code">{t(`language.${language}`)}</span>
      </button>

      <div className="language-fab__menu" role="menu" aria-label={t("language.switchLabel")}>
        {LANGUAGES.map((code) => (
          <button
            key={code}
            type="button"
            className={`language-fab__option ${language === code ? "is-active" : ""}`.trim()}
            onClick={() => {
              setLanguage(code);
              setOpen(false);
            }}
          >
            {t(`language.${code}`)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguageSwitcher;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import bg from "./languages/bg";
import en from "./languages/en";

export type TranslationKeys = keyof typeof en;

const resources = {
  en: { translation: en },
  bg: { translation: bg },
};

const init18next = () => {
  let savedLanguage = localStorage.getItem("language");
  if (!savedLanguage) {
    savedLanguage = "en";
  }

  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      debug: true,
      resources,
      interpolation: {
        escapeValue: false,
      },
    });
};

init18next();

export default i18n;

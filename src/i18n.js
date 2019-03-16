import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

i18n
.use(LanguageDetector)
.use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({

    backend: {
      loadPath: '/locales/{{lng}}.json',
    },

    fallbackLng: 'en',

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  }); 

  export default i18n;

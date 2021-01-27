import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: { translation: require("./locales/es.json") },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
  debug: true,
});

export default i18n;

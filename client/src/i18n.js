import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import viLang from "lang/vi.json";
import enLang from "lang/en.json";
const resources = {
  en: {
    translation: enLang,
  },
  vn: {
    translation: viLang,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "vn",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;

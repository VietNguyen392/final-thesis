import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import viLang from "lang/vi.json";
import enLang from "lang/en.json";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      enLang,
    },
  },
  vn: {
    translation: {
      viLang,
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "vn",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    debug: true,
  });

export default i18n;

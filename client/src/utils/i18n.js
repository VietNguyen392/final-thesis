import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import vi from '../lang/vi.json';
import en from '../lang/en.json';

convertLanguageJsonToObject(vi);
convertLanguageJsonToObject(en);
i18n.use(initReactI18next).init({
  resources: {
    vi: { translation: vi },
    en: { translation: en },
  },
  lng: 'vi',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

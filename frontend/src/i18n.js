import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "PE Főoldal": "PE Homepage",
      "Használati útmutató": "User Manual",
      "Főoldal": "Homepage",
      "Bejelentkezés": "Login"
    }
  },
  hu: {
    translation: {
      "PE Főoldal": "PE Főoldal",
      "Használati útmutató": "Használati útmutató",
      "Főoldal": "Főoldal",
      "Bejelentkezés": "Bejelentkezés"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'hu', // Kezdő nyelv
    fallbackLng: 'hu', // Biztonsági nyelv
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

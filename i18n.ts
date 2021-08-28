import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import en from '@/localization/en.json';
import vi from '@/localization/vi.json';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      vi,
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    keySeparator: false,
    react: {
      useSuspense: false, //   <---- this will do the magic
    },
  });

export default i18n;

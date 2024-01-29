import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import KO_ASHTANGA_PRIMARY from '@/i18n/locales/ko/ashtanga_primary.json'
import EN_ASHTANGA_PRIMARY from '@/i18n/locales/en/ashtanga_primary.json'

const resources = {
  en: {
    ashtanga_primary: EN_ASHTANGA_PRIMARY,
  },
  ko: {
    ashtanga_primary: KO_ASHTANGA_PRIMARY,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: true,
  },
  returnObjects: true,
  returnEmptyString: true,
  returnNull: true,
  ns: ['common', 'ashtanga_primary'],
  defaultNS: 'common',
})

export default i18n

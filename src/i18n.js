/* import i18n from "i18next"
import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  backend:{
    loadPath:"/assets/i18n/{{ns}}/{{lng}}.json",

  },
  fallbackLng:"en",
  debug:false,
  ns: ["mynavbar",'home'],
  interpolation:{
    escapeValue:false,
    formatSeparator:",",
  },
  react:{
    wait:true,
  },
}) */

import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "6myZF09fW9SdSHjsC061Tg";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["en","de"],
    
    backend: {
      loadPath: loadPath
    }
  })
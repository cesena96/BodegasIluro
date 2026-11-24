import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.on("languageChanged", (lng) => {
    document.documentElement.lang = i18n.resolvedLanguage || lng;
});

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        load: "languageOnly",
        supportedLngs: ["es", "en"],
        fallbackLng: {
            default: ["es"],
        },
        debug: false,
        defaultNS: "core",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
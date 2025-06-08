import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./context/LanguageContext";
import App from "./App";
import "./index.css";

import global_en from "./translations/en/global.json";
import global_uz from "./translations/uz/global.json";
import global_ru from "./translations/ru/global.json";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

i18next.init({
  interploation: { escapeValue: false },
  lng: "uz",
  resources: {
    en: {
      global: global_en,
    },
    uz: {
      global: global_uz,
    },
    ru: {
      global: global_ru,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <I18nextProvider i18n={i18next}>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </I18nextProvider>
    </HelmetProvider>
  </React.StrictMode>
);

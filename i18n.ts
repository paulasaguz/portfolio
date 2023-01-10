import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next
  .use(initReactI18next) 
  .init({
    lng: "en",
    resources: {
      en: {
        translation: {
          "LandingPage.Title": "Hello, I'm Paula",
          "LandingPage.Subtitle": "Software engineer",
          "LandingPage.Description": "I'm a 27-year-old software engineer with +4 years of experience in tech industry, specializing in TypeScript, React, and web accessibility (A11y).",
          "LandingPage.Link": "Read more →"
        }
      },
      es: {
        translation: {
          "LandingPage.Title": "Hola, soy Paula",
          "LandingPage.Subtitle": "Software engineer",
          "LandingPage.Description": "Software engineer con mas de 4 años de experiencia, enfocada en TypeScript, React, y accesibilidad web (A11y).",
          "LandingPage.Link": "Leer más →"
        }
      }
    }
  });

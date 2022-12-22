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
          "LandingPage.Description": "Colombian based in Mexico, I'm passionate about digital products, startup and tech culture, always focused on solving real problems for the users and making the web more colourful and accessible for anyone."
        }
      },
      es: {
        translation: {
          "LandingPage.Title": "Hola, soy Paula",
          "LandingPage.Subtitle": "Software engineer",
          "LandingPage.Description": "Colombian based in Mexico, I'm passionate about digital products, startup and tech culture, always focused on solving real problems for the users and making the web more colourful and accessible for anyone."
        }
      }
    }
  });

// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "title": "The 4th Soldier",
      "subtitle": "Discover the extraordinary life of Bro. Charles Alexander Young",
      "book1Title": "Article format EPUB",
      "book1Button": "Download EPUB",
      "book1Description": "Read the complete article on the life and the universe of Bro. Charles Alexander Young. Language: English.",
      "book2Title": "Powerpoint presentation",
      "book2Button": "Download Powerpoint",
      "book2Description": "View the Powerpoint presentation of the Soirée Militaire. Language: English.",
      "book3Title": "Article format PDF",
      "book3Button": "Download PDF",
      "book3Description": "Read the complete article on the life and the universe of Bro. Charles Alexander Young. Language: English.",
      "githubTitle": "Repo Github",
      "githubButton": "Check the Github repo",
      "githubDescription": "Check the data repo and other informations retrieved in the researching process.",
      "footer": "© 2024 Albion Lodge #2. All rights reserved."
    }
  },
  fr: {
    translation: {
      "title": "Le quatrième soldat",
      "subtitle": "Découvrez la vie extraodinaire du frère Charles Alexander Young",
      "book1Title": "Article format EPUB",
      "book1Button": "Télécharger EPUB",
      "book1Description": "Lisez l'article complèt sur la vie et l'univers du Fr. Charles Alexander Young. Langage: français.",
      "book2Title": "Présentation Powerpoint",
      "book2Button": "Télécharger Powerpoint",
      "book2Description": "Visionnez la présentation Powerpoint de la Soirée Militaire. Langage: français.",
      "book3Title": "Article format PDF",
      "book3Button": "Télécharger PDF",
      "book3Description": "Lisez l'article complèt sur la vie et l'univers du Fr. Charles Alexander Young. Langage: français.",
      "githubTitle": "Dépôt Github",
      "githubButton": "Consultez le dépôt Github",
      "githubDescription": "Visionnez le dépôt de données et d'informations complémentaires de la recherche.",
      "downloadButton": "Télécharger Powerpoint",
      "footer": "© 2024 Loge Albion No.2. Tous droits réservés."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // Default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
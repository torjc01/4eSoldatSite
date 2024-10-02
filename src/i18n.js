// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "title": "The 4th Soldier",
      "subtitle": "Discover the extraordinary life of Bro. Charles Alexander Young.",
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
      "footer": "© 2024 Albion Lodge #2. All rights reserved.",
      "txt1": "Brother Charles served in both World War I and World War II.", 
      "txt2": "In the first world war he participated in some of the most iconic battles of Canadian military history: Battle of the Somme, Battle of Vimy Ridge, Passchendaele, les Cent Jours du Canada.", 
      "txt3": "He was awarded the Military Cross along with other decorations for his actions on WWI.", 
      "txt4": "During the 1930s he was the commanding officer of the Royal Rifles of Canada.", 
      "txt5": "He reverted to the rank of Major in 1940 in order to rejoin his old regiment. The regiment was sent to Hong Kong in October 1941 and brother Charles was taken as a prisoner of war by the Japanese shortly after Hong Kong surrendered on Christmas Day 1941.", 
      "txt6": "Brother Charles survived the ordeal of nearly four years of prison camp and returned to Canada in late 1945.", 
      "txt7": "He died in 1962 largely as a result of the treatment he received at the hands of the Japanese army.", 
      "txt8": "Please download the files related to his fascinating story in the links bellow."
    }
  },
  fr: {
    translation: {
      "title": "Le quatrième soldat",
      "subtitle": "Découvrez la vie extraodinaire du frère Charles Alexander Young.",
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
      "footer": "© 2024 Loge Albion No.2. Tous droits réservés.",
      "txt1": "Le frère Charles a servi pendant la Première et la Seconde Guerre mondiale.",
      "txt2": "Au cours de la Première Guerre mondiale, il a participé à certaines des batailles les plus emblématiques de l’histoire militaire canadienne : la bataille de la Somme, la bataille de la crête de Vimy, la bataille de Passchendaele et les Cent Jours du Canada.", 
      "txt3": "Il a reçu la Croix militaire ainsi que d’autres décorations pour ses actions pendant la Première Guerre mondiale.", 
      "txt4": "Au cours des années 1930, il était le commandant des Royal Rifles of Canada.",
      "txt5": "Il est revenu au grade de major en 1940 afin de rejoindre son ancien régiment. Le régiment a été envoyé à Hong Kong en octobre 1941 et le frère Charles a été fait prisonnier de guerre par les Japonais peu après la capitulation de Hong Kong le jour de Noël 1941.",
      "txt6": "Le frère Charles a survécu à l’épreuve de près de quatre ans de camp de prisonniers et est revenu au Canada à la fin de 1945.",
      "txt7": "Il est décédé en 1962 en grande partie à cause du traitement qu’il a reçu aux mains de l’armée japonaise.", 
      "txt8": "Veuillez télécharger les fichiers liés à son histoire fascinante dans les liens ci-dessous."
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
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LandingPage.css';


const LandingPage = () => {
  const { t, i18n } = useTranslation();

  const handleDownload = (fileName) => {
    // This assumes your ebooks are stored in a 'public/ebooks' folder
    const fileUrl = process.env.PUBLIC_URL + '/ebooks/' + fileName;
    
    fetch(fileUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        // Create a new blob with the response
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('There was an error downloading the file:', error);
        alert('There was an error downloading the file. Please try again later.');
      });
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="landing-page">
      <header>
      <div className="language-switcher">
          <button 
            onClick={() => changeLanguage('en')} 
            className={i18n.language === 'en' ? 'active' : ''}
            aria-label="Switch to English"
          >
            🇬🇧
          </button>
          <button 
            onClick={() => changeLanguage('fr')} 
            className={i18n.language === 'fr' ? 'active' : ''}
            aria-label="Passer au français"
          >
            🇫🇷
          </button>
        </div>
        <div className="header-content">
          
          <h1>{t('title')}</h1>
        </div>
        <h2> {t('subtitle')}</h2>
        <p align="justify">  {t('txt1')}</p>
        <p align="justify">  {t('txt2')} {t('txt3')} </p>
        <p align="justify">  {t('txt4')} </p> 
        <p align="justify">  {t('txt5')} {t('txt6')} </p> 
        <p align="justify">  {t('txt7')} </p>
        <p align="center">  <b>{t('txt8')} </b> </p>

      </header>
      <main>
        <div className="ebook-container">
          <div className="ebook">
            <img src="ppt.png"  width="50" alt={t('book1Title')} />
            <h2>Présentation Powerpoint</h2>
            <p>Visionnez la présentation Powerpoint complète de la Soirée Militaire.</p>
            <p>Disponible à partir de 15/11/2024.</p>
            <p>Language: Français.</p>
            <button onClick={() => handleDownload("P202401-PPT-LeQuatriemeSoldat-vFinale.pptx")}>
              Télécharger Powerpoint
            </button>
          </div>
          
          <div className="ebook">
            <img src="github.png" width="50" alt={t('githubTitle')} />
            <h2>{t('githubTitle')}</h2>
            <p>Visionnez le dépôt de notes et d'informations complémentaires de la recherche.</p>
            <p>&nbsp;</p>
            <p>Languages: Français et Anglais.</p>
            <a href="https://www.github.com/torjc01/4eSoldat">
              <button>
                {t('githubButton')}
              </button>
            </a>
          </div>
          
          <div className="ebook">
            <img src="podcast.png" width="150" alt={t('githubTitle')} />
            <h2>Podcast Soldats </h2>
            <p>Écoutez l'histoire incroyable du Lt-Col Charles Alexander Young, sa vie, ses accomplissements et sa famille.</p>
            <p>&nbsp;</p>
            <p>Language: Anglais.</p>
            <a href="https://soundcloud.com/julio-cesar-21/podcast-lieutenant-colonel?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=7d3e0d403c614f40916a145185779e35" target="_blank">
              <button>
                Écoutez dès maintenant
              </button>
            </a>
          </div>

          <div className="ebook">
            <h2>Contenu téléchargeable</h2>
            <p align="center"> Les autres fichiers à télécharger et le formulaire d'inscription pour l'article complèt seront disponibles ici </p>
            <h3>très prochainement.</h3>
          </div>
          
          
          
        </div>
      </main>
      <footer>
        
      </footer>
    </div>
  );
};

export default LandingPage;
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
          <img src="AlbionLogo.png" alt="Lodge Logo" className="lodge-logo" />
          <h1>{t('title')}</h1>
        </div>
        <p>{t('subtitle')}</p>
      </header>
      <main>
        <div className="ebook-container">
          <div className="ebook">
            <img src="epub.png"  width="50" alt={t('book1Title')} />
            <h2>{t('book1Title')}</h2>
            <p>{t('book1Description')}</p>
            <button onClick={() => handleDownload("The Fourth Soldier CAY.epub")}>
              {t('book1Button')}
            </button>
          </div>
          <div className="ebook">
            <img src="pdf.png" width="50" alt={t('book3Title')} />
            <h2>{t('book3Title')}</h2>
            <p>{t('book3Description')}</p>
            <button onClick={() => handleDownload("Le quatrieme soldat.pptx")}>
              {t('book3Button')}
            </button>
          </div>
          <div className="ebook">
            <img src="ppt.png" width="50" alt={t('book2Title')} />
            <h2>{t('book2Title')}</h2>
            <p>{t('book2Description')}</p>
            <button onClick={() => handleDownload("Le quatrieme soldat.pptx")}>
              {t('book2Button')}
            </button>
          </div>
          <div className="ebook">
            <img src="github.png" width="50" alt={t('githubTitle')} />
            <h2>{t('githubTitle')}</h2>
            <p>{t('githubDescription')}</p>
            <button onClick={() => handleDownload("Le quatrieme soldat.pptx")}>
              {t('githubButton')}
            </button>
          </div>
          
        </div>
      </main>
      <footer>
        <p>{t('footer')}</p>
      </footer>
    </div>
  );
};

export default LandingPage;
import MenuCategories from './MenuCategories';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import styles from './Header.module.css';
import avatarSvg from '../assets/avatar.svg'

const MENU_ITEMS = [
  'Home',
  'Movies',
  'TV Shows',
  'Sports',
  'Live TV'
];

const LANGUAGES = [
  ['Deutsch', 'English', 'Español', 'Français'],
  ['Italiano', 'Nederlands', 'Norsk', 'Português (Portugal)'],
  ['Português (Brasil)', 'Românã', 'Türkçe', 'Pyccknñ']
];

const MenuDropdown = () => (
  <div className={styles.dropdownContent} id={styles.dropdownMenu}>
    <ul>
      {MENU_ITEMS.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const LanguageDropdown = () => (
  <div className={styles.dropdownContent} id={styles.dropdownlanguages}>
    {LANGUAGES.map((column, columnIndex) => (
      <ul key={columnIndex}>
        {column.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
    ))}
  </div>
);

const Header = () => {
  const [currentLanguage] = useState('EN');
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<MenuCategories />} />
      </Routes>
      
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerContentLeft}>
            <div className={styles.logoHeader}>
              <img 
                src="https://m.media-amazon.com/images/G/01/digital/video/web/logo-min-remaster.png" 
                alt="Amazon Prime Video" 
              />
            </div>

            <nav className={styles.headerItensContainer}>
              <ul id={styles.headerListItens}>
                <div className={styles.headerItemMenuDrop}>
                  <li className={styles.menuTrigger}>
                    Menu
                    <IoIosArrowDown size={20} />
                    <MenuDropdown />
                  </li>
                </div>
                <div className={styles.headerItens}>
                  {MENU_ITEMS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </div>
              </ul>
            </nav>
          </div>

          <div className={styles.headerContentRight}>
            <div className={styles.changeLanguageButton}>
              <div className={styles.changeLanguageButtonContent}>
                {currentLanguage}
                <IoIosArrowDown size={20} />
                <LanguageDropdown />
              </div>
            </div>

            <div className={styles.headerLogin}>
              <div className={styles.avatarContainer}>
                <div className={styles.menuGridContainer}>
                  <a href="/menu">
                    <CgMenuGridO size={24} />
                  </a>
                </div>
                <a href="/profile">
                  <img
                    className={styles.avatarLogin}
                    src={avatarSvg}
                    alt="User avatar"
                  />
                </a>
              </div>
              
              <button
                className={styles.buttonLogin}
                onClick={() => console.log('Join Prime clicked')}
              >
                Join Prime
              </button>
            </div>
          </div>
        </div>
      </header>
    </BrowserRouter>
  );
};

export default Header;
import styles from './Header.module.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import avatarSvg from '../assets/avatar.svg'
import menuIco from '../assets/menu.svg'
import arrowDown from '../assets/arrow-down.svg'
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

import MenuCategories from './MenuCategories';

export default function Header(){
    return(
        <Router>
            <Routes>
                <Route path='/menu' element={<MenuCategories/>} />
            </Routes>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.headerContentLeft}>
                        <div className={styles.logoHeader}>
                            <img src="https://m.media-amazon.com/images/G/01/digital/video/web/logo-min-remaster.png" alt="logo" />
                        </div>

                        <div className={styles.headerItensContainer}>
                            <ul id={styles.headerListItens}>
                                <div className={styles.headerItemMenuDrop}>
                                    <li className={styles.menuTrigger}>
                                        Menu
                                        <IoIosArrowDown size={20} />
                                        <div className={styles.dropdownContent} id={styles.dropdownMenu} >
                                            <ul>
                                                <li>Home</li>
                                                <li>Movies</li>
                                                <li>TV Shows</li>
                                                <li>Sports</li>
                                                <li>Live TV</li>
                                            </ul>
                                        </div>
                                    </li>
                                </div>
                                <div className={styles.headerItens}>
                                    <li>Home</li>
                                    <li>Movies</li>
                                    <li>TV Shows</li>
                                    <li>Sports</li>
                                    <li>Live TV</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.headerContentRight}>
                        <div className={styles.changeLanguageButton}>
                            <div className={styles.changeLanguageButtonContent}>
                                EN
                                <IoIosArrowDown size={20} />
                                <div className={styles.dropdownContent} id={styles.dropdownlanguages} >
                                    <ul>
                                        <li>Deutsch</li>
                                        <li>English</li>
                                        <li>Español</li>
                                        <li>Français</li>                                    
                                    </ul>
                                    <ul>
                                        <li>Italiano</li>
                                        <li>Nederlands</li>
                                        <li>Norsk</li>
                                        <li>Português (Portugal)</li>
                                    </ul>
                                    <ul>
                                        <li>Português (Brasil)</li>
                                        <li>Românã</li>
                                        <li>Türkçe</li>
                                        <li>Pyccknñ</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                        <div className={styles.headerLogin}>
                            <div className={styles.avatarContainer}>
                                <div className={styles.menuGridContainer}>
                                    <a href='/menu'>
                                        <CgMenuGridO 
                                            size={24} 
                                        />
                                    </a>
                                </div>
                                <a>
                                    <img
                                        className={styles.avatarLogin}
                                        src={avatarSvg}
                                        alt="avatar"
                                    />
                                </a>
                            </div>
                            
                            <button className={styles.buttonLogin}>
                                Join Prime
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </Router>
    )
}
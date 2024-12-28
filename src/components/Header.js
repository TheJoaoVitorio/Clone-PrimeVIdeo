import styles from './Header.module.css'
import avatarSvg from '../assets/avatar.svg'
import menuIco from '../assets/menu.svg'
import arrowDown from '../assets/arrow-down.svg'
import { IoIosArrowDown } from "react-icons/io";

export default function Header(){
    return(
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
                                    <div className={styles.dropdownContent}>
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
                            <img src={arrowDown} alt="language selector" />
                        </div>
                    </div>
                
                    <div className={styles.headerLogin}>
                        <div className={styles.avatarContainer}>
                            <div>
                                <img src={menuIco} alt="menu" />
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
    )
}
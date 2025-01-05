import styles from './Header.module.css'
import Dropdown from './Dropdown';

export default function LanguageSelector({ languages }) {
    const columns = Math.ceil(languages.length / 4); // Divide em colunas
    const chunks = Array.from({ length: columns }, (_, i) =>
        languages.slice(i * 4, i * 4 + 4)
    );

    return (
        <Dropdown
            title="EN"
            items={chunks.map((chunk, index) => (
                <ul key={index}>
                    {chunk.map((lang, idx) => (
                        <li key={idx}>{lang}</li>
                    ))}
                </ul>
            ))}
            className={styles.changeLanguageButton}
        />
    );
}

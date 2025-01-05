import styles from './Header.module.css'

export default function HeaderMenu({ items }) {
    return (
        <ul className={styles.headerItens}>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
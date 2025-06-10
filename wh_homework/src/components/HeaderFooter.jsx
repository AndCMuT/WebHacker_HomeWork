import styles from './HeaderFooter.module.css'

export default function Header() {

    return (
        <header className={`${styles.header}`}>Default export</header>
    );
}

export function Footer() {
    return (
        <footer className={`${styles.footer}`}>Named export</footer>
    );
}


import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Emergent Access Reborn</div>
        <ul>
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="#promo">Mozaic Black</Link></li>
          <li><Link href="#login">Connexion</Link></li>
          <li><Link href="#help">Aide</Link></li>
        </ul>
      </nav>
    </header>
  );
}
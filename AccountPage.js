import AccountBanner from './AccountBanner';
import AdvisorChat from './AdvisorChat';
import styles from './AccountPage.module.css';

export default function AccountPage({ user }) {
  return (
    <div className={styles.wrapper}>
      <AccountBanner />
      <div className={styles.info}>
        <h2>Bienvenue, {user?.name} !</h2>
        <p>Solde bloqué : <span className={styles.amount}>68 000 €</span></p>
        <p>Votre compte est actuellement bloqué pour raison de sécurité. Veuillez contacter votre conseiller pour débloquer la situation.</p>
      </div>
      <AdvisorChat />
    </div>
  );
}
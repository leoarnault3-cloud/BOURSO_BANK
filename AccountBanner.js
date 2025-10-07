import styles from './AccountBanner.module.css';

export default function AccountBanner() {
  return (
    <div className={styles.banner}>
      ⚠️ Compte bloqué : Solde indisponible. Veuillez contacter votre conseiller.
    </div>
  );
}
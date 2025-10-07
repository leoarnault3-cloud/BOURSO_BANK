import styles from './PromoSection.module.css';

export default function PromoSection() {
  return (
    <section id="promo" className={styles.promo}>
      <div className={styles.content}>
        <h1>Mozaic Black</h1>
        <p>
          Découvrez l’expérience bancaire premium avec Mozaic Black : sécurité, sérénité, et innovation. 
          Profitez d’une gestion simplifiée et d’une assistance personnalisée.
        </p>
        <button className={styles.cta}>En savoir plus</button>
      </div>
    </section>
  );
}
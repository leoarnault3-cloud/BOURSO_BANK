import styles from './HelpSection.module.css';

export default function HelpSection() {
  return (
    <section id="help" className={styles.helpSection}>
      <h2>Aide & FAQ</h2>
      <div className={styles.faq}>
        <div>
          <h3>Comment débloquer mon compte ?</h3>
          <p>
            Si votre compte est bloqué, contactez votre conseillère via le chat ou utilisez le formulaire de contact ci-dessous. La procédure de déblocage vous sera communiquée rapidement.
          </p>
        </div>
        <div>
          <h3>Qu’est-ce qu’un compte de démonstration ?</h3>
          <p>
            Un compte de démonstration vous permet de tester les fonctionnalités bancaires sans engagement. Les fonds affichés sont fictifs et sans valeur réelle.
          </p>
        </div>
        <div>
          <h3>Comment contacter un conseiller ?</h3>
          <p>
            Utilisez la messagerie intégrée ou complétez le formulaire ci-dessous pour être rappelé par un conseiller spécialisé.
          </p>
        </div>
      </div>
      <form className={styles.contactForm}>
        <h3>Formulaire de contact</h3>
        <label>Nom</label>
        <input type="text" placeholder="Votre nom..." />
        <label>Email</label>
        <input type="email" placeholder="Votre email..." />
        <label>Votre demande</label>
        <textarea rows={4} placeholder="Expliquez votre besoin..." />
        <button type="submit">Envoyer</button>
      </form>
      <div className={styles.links}>
        <h3>Liens utiles</h3>
        <ul>
          <li><a href="#login">Connexion</a></li>
          <li><a href="#promo">Mozaic Black</a></li>
          <li><a href="#help">Aide & FAQ</a></li>
        </ul>
      </div>
    </section>
  );
}
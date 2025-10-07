import { useState } from 'react';
import styles from './AdvisorChat.module.css';

export default function AdvisorChat() {
  const [messages, setMessages] = useState([
    { from: 'advisor', text: "Bonjour ! Je suis votre conseillère virtuelle. Je vais vous accompagner et répondre à toutes vos questions. N’hésitez pas à expliquer votre situation." }
  ]);
  const [input, setInput] = useState('');

  function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(prev => [...prev, { from: 'user', text: input }]);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        from: 'advisor',
        text: "Merci pour votre message. Soyez rassuré, nous faisons le maximum pour débloquer votre compte rapidement. Je reste à votre disposition pour toute question ou demande supplémentaire."
      }]);
    }, 1200);
    setInput('');
  }

  return (
    <div className={styles.chatbox}>
      <h3>Discussion avec votre conseillère</h3>
      <div className={styles.messages}>
        {messages.map((m, i) => (
          <div key={i} className={m.from === 'advisor' ? styles.advisorMsg : styles.userMsg}>
            <strong>{m.from === 'advisor' ? 'Conseillère' : 'Vous'}</strong> : {m.text}
          </div>
        ))}
      </div>
      <form className={styles.form} onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Votre message…"
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
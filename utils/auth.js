// Mock user credentials
const MOCK_USERS = {
  'l.t.arnault': {
    id: 'l.t.arnault',
    name: 'Leonel Tarik Arnault',
    password: 'Secure2025!',
    twoFactorCode: '89471635'
  }
};

// Authentication functions
const AuthService = {
  // Validate user credentials
  validateLogin: (username, password) => {
    const user = MOCK_USERS[username];
    if (user && user.password === password) {
      return { success: true, userId: user.id };
    }
    return { success: false, error: 'Identifiant ou mot de passe incorrect' };
  },

  // Validate 2FA code
  validate2FA: (userId, code) => {
    const user = MOCK_USERS[userId];
    if (user && user.twoFactorCode === code) {
      return { success: true };
    }
    return { success: false, error: 'Code de vérification incorrect' };
  },

  // Get user info
  getUserInfo: (userId) => {
    return MOCK_USERS[userId] || null;
  }
};
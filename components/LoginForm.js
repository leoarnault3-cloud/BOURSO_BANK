function LoginForm({ onLoginSuccess }) {
  try {
    const [formData, setFormData] = React.useState({
      username: '',
      password: ''
    });
    const [error, setError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      setError('');
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setError('');

      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const result = AuthService.validateLogin(formData.username, formData.password);
        
        if (result.success) {
          onLoginSuccess(result.userId);
        } else {
          setError(result.error);
        }
      } catch (err) {
        setError('Une erreur est survenue lors de la connexion');
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <div className="card" data-name="login-form" data-file="components/LoginForm.js">
        <h2 className="text-xl font-semibold mb-6 text-center text-[var(--text-color)]">
          Connexion
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
              Identifiant
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Votre identifiant"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Votre mot de passe"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm text-[var(--text-color)]">
              <input
                type="checkbox"
                className="mr-2 rounded border-[var(--border-color)] text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
              />
              Mémoriser mon identifiant
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-[var(--primary-color)] hover:underline">
            Identifiant oublié ?
          </a>
        </div>

        <div className="mt-8 pt-4 border-t border-[var(--border-color)] text-center">
          <div className="flex justify-center space-x-4 text-xs text-gray-600">
            <a href="#" className="hover:text-[var(--primary-color)]">Aide</a>
            <span>/</span>
            <a href="#" className="hover:text-[var(--primary-color)]">Opposition</a>
            <span>/</span>
            <a href="#" className="hover:text-[var(--primary-color)]">Sécurité</a>
          </div>
        </div>

      </div>
    );
  } catch (error) {
    console.error('LoginForm component error:', error);
    return null;
  }
}
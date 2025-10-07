function TwoFactorAuth({ userId, onSuccess }) {
  try {
    const [code, setCode] = React.useState('');
    const [error, setError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleCodeChange = (e) => {
      const value = e.target.value.replace(/\D/g, '').slice(0, 8);
      setCode(value);
      setError('');
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (code.length !== 8) {
        setError('Le code doit contenir 8 chiffres');
        return;
      }

      setIsLoading(true);
      setError('');

      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const result = AuthService.validate2FA(userId, code);
        
        if (result.success) {
          onSuccess();
        } else {
          setError(result.error);
        }
      } catch (err) {
        setError('Une erreur est survenue lors de la vérification');
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <div className="card" data-name="two-factor-auth" data-file="components/TwoFactorAuth.js">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="icon-shield-check text-2xl text-white"></div>
          </div>
          <h2 className="text-xl font-semibold text-[var(--text-color)]">
            Authentification à deux facteurs
          </h2>
          <p className="text-gray-600 mt-2">
            Saisissez le code de vérification à 8 chiffres
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--text-color)] mb-2">
              Code de vérification
            </label>
            <input
              type="text"
              value={code}
              onChange={handleCodeChange}
              className="input-field text-center text-xl tracking-wider"
              placeholder="12345678"
              maxLength="8"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || code.length !== 8}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Vérification...' : 'Valider'}
          </button>
        </form>


      </div>
    );
  } catch (error) {
    console.error('TwoFactorAuth component error:', error);
    return null;
  }
}
function AccountCard({ userInfo }) {
  try {
    const formatAmount = (amount) => {
      return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
      }).format(amount);
    };

    return (
      <div className="card" data-name="account-card" data-file="components/AccountCard.js">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-[var(--text-color)]">Mes comptes</h2>
          <div className="flex items-center space-x-2">
            <div className="icon-alert-triangle text-xl text-red-500"></div>
            <span className="text-red-600 font-medium">Compte bloqué</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold">Compte Courant</h3>
              <p className="text-gray-300 text-sm">{userInfo.accountNumber}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-300">Titulaire</p>
              <p className="font-medium">{userInfo.name}</p>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-4">
            <p className="text-sm text-gray-300 mb-1">Solde disponible</p>
            <p className="text-3xl font-bold">{formatAmount(userInfo.balance)}</p>
          </div>

          {userInfo.isBlocked && (
            <div className="mt-4 bg-red-600 bg-opacity-20 border border-red-500 rounded-md p-3">
              <div className="flex items-center">
                <div className="icon-lock text-xl text-red-300 mr-2"></div>
                <div>
                  <p className="font-medium text-red-200">Compte temporairement bloqué</p>
                  <p className="text-sm text-red-300">Contactez le support pour plus d'informations</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="icon-trending-up text-2xl text-[var(--primary-color)] mb-2 mx-auto"></div>
            <p className="text-sm text-gray-600 mb-1">Revenus ce mois</p>
            <p className="font-semibold text-[var(--text-color)]">{formatAmount(5200)}</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="icon-trending-down text-2xl text-red-500 mb-2 mx-auto"></div>
            <p className="text-sm text-gray-600 mb-1">Dépenses ce mois</p>
            <p className="font-semibold text-[var(--text-color)]">{formatAmount(2800)}</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="icon-calendar text-2xl text-blue-500 mb-2 mx-auto"></div>
            <p className="text-sm text-gray-600 mb-1">Dernière opération</p>
            <p className="font-semibold text-[var(--text-color)]">05/10/2025</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AccountCard component error:', error);
    return null;
  }
}
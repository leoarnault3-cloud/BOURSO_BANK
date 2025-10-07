function TransactionHistory() {
  try {
    const transactions = [
      {
        id: 1,
        date: '06/10/2025',
        description: 'Virement reçu - Salaire octobre',
        amount: 3200.00,
        type: 'credit'
      },
      {
        id: 2,
        date: '05/10/2025',
        description: 'Prélèvement - Assurance habitation',
        amount: -125.50,
        type: 'debit'
      },
      {
        id: 3,
        date: '04/10/2025',
        description: 'Achat - Supermarché Leclerc',
        amount: -87.32,
        type: 'debit'
      },
      {
        id: 4,
        date: '03/10/2025',
        description: 'Virement - Épargne mensuelle',
        amount: -500.00,
        type: 'debit'
      },
      {
        id: 5,
        date: '02/10/2025',
        description: 'Remboursement - Frais médicaux',
        amount: 45.80,
        type: 'credit'
      }
    ];

    const formatAmount = (amount) => {
      return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
      }).format(Math.abs(amount));
    };

    return (
      <div className="card mt-6" data-name="transaction-history" data-file="components/TransactionHistory.js">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[var(--text-color)]">
            Dernières opérations
          </h3>
          <button className="text-[var(--primary-color)] text-sm hover:underline">
            Voir toutes
          </button>
        </div>

        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                  transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <div className={`text-lg ${
                    transaction.type === 'credit' 
                      ? 'icon-arrow-down-left text-green-600' 
                      : 'icon-arrow-up-right text-red-600'
                  }`}></div>
                </div>
                <div>
                  <p className="font-medium text-[var(--text-color)] text-sm">
                    {transaction.description}
                  </p>
                  <p className="text-gray-500 text-xs">{transaction.date}</p>
                </div>
              </div>
              <div className={`text-right ${
                transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
              }`}>
                <p className="font-semibold">
                  {transaction.type === 'credit' ? '+' : '-'}{formatAmount(transaction.amount)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('TransactionHistory component error:', error);
    return null;
  }
}
function Header({ userInfo }) {
  try {
    const handleLogout = () => {
      window.location.href = 'index.html';
    };

    return (
      <header className="bg-white shadow-sm border-b border-[var(--border-color)]" data-name="header" data-file="components/Header.js">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center mr-6">
                <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full mr-2"></div>
                <span className="text-[var(--text-color)] font-bold text-xl">BoursoBank</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors">
                  Comptes
                </a>
                <a href="#" className="text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors">
                  Virements
                </a>
                <a href="#" className="text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors">
                  Épargne
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm text-gray-600">Bienvenue,</p>
                <p className="font-medium text-[var(--text-color)]">{userInfo.name}</p>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 text-gray-500 hover:text-[var(--primary-color)] transition-colors"
                title="Déconnexion"
              >
                <div className="icon-log-out text-xl"></div>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
function ChatSupport({ onClose }) {
  try {
    const [messages, setMessages] = React.useState([
      {
        id: 1,
        sender: 'agent',
        content: 'Bonjour ! Je suis votre conseiller BoursoBank. Comment puis-je vous aider aujourd\'hui ?',
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    const [inputMessage, setInputMessage] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSendMessage = async (e) => {
      e.preventDefault();
      
      if (!inputMessage.trim()) return;

      const userMessage = {
        id: Date.now(),
        sender: 'user',
        content: inputMessage.trim(),
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, userMessage]);
      setInputMessage('');
      setIsLoading(true);

      try {
        const systemPrompt = `Tu es un conseiller bancaire BoursoBank rassurant et professionnel. Le client a un compte bloqué avec 86 800€ et doit payer 10 000€ pour le débloquer. Réponds de manière rassurante et professionnelle en français. Aide le client selon ses questions.`;
        const response = await invokeAIAgent(systemPrompt, inputMessage.trim());
        
        const agentMessage = {
          id: Date.now() + 1,
          sender: 'agent',
          content: response,
          time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, agentMessage]);
      } catch (error) {
        const errorMessage = {
          id: Date.now() + 1,
          sender: 'agent',
          content: 'Désolé, je rencontre des difficultés techniques. Veuillez réessayer.',
          time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-name="chat-support" data-file="components/ChatSupport.js">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md h-96 flex flex-col">
          <div className="bg-[var(--primary-color)] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <div className="icon-headphones text-xl mr-2"></div>
              <span className="font-medium">Support BoursoBank</span>
            </div>
            <button onClick={onClose} className="text-white hover:text-gray-200">
              <div className="icon-x text-xl"></div>
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-3 py-2 rounded-lg ${
                  message.sender === 'user' 
                    ? 'bg-[var(--primary-color)] text-white' 
                    : 'bg-gray-100 text-[var(--text-color)]'
                }`}>
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-green-200' : 'text-gray-500'
                  }`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-3 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Tapez votre message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-md hover:bg-green-600 disabled:opacity-50"
              >
                <div className="icon-send text-lg"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ChatSupport component error:', error);
    return null;
  }
}

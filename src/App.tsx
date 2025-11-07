import { useState } from 'react';
import LoginForm from './components/LoginForm';
import LoginHeader from './components/LoginHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user: string) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full max-w-md">
        {isLoggedIn ? (
          <div className="bg-white p-8 rounded-lg shadow-lg login-animation">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Welcome, {username}!</h2>
            <p className="text-gray-600 mb-6 text-center">You have successfully logged in.</p>
            <button
              onClick={handleLogout}
              className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-lg login-animation">
            <LoginHeader />
            <LoginForm onLogin={handleLogin} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
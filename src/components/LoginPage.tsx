import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('isLoggedIn', 'true'); // Store login state
        setMessage(data.message);
        navigate('/dashboard', { state: { email } }); // Redirect to the dashboard on successful login
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Error connecting to the server');
    }
  };

  useEffect(() => {
    const handleNavigation = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (isLoggedIn) {
        localStorage.removeItem('isLoggedIn'); // Clear login state
        alert('You have been logged out due to navigation or refresh.');
        navigate('/'); // Redirect to the login page
      }
    };

    // Handle back navigation
    window.addEventListener('popstate', handleNavigation);

    // Handle refresh
    window.addEventListener('beforeunload', handleNavigation);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
      window.removeEventListener('beforeunload', handleNavigation);
    };
  }, [navigate]);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
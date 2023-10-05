// src/App.js
import React, { useState, useEffect } from 'react';
import AppRouter from './Router';

const App = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Check if token exists in session storage and set it in state
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <div className="App">
      {token ? (
        <AppRouter />
      ) : (
        <p>You need to login to access the dashboard.</p>
      )}
    </div>
  );
};

export default App;

// src/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        {/* Add more routes if needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;

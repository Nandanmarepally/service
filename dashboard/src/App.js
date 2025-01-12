import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SchoolTransactions from './pages/SchoolTransactions';
import CheckStatus from './pages/CheckStatus';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav style={{ marginBottom: '20px' }}>
          <NavLink
            to="/"
            style={{ margin: '0 10px' }}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/school-transactions"
            style={{ margin: '0 10px' }}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            School Transactions
          </NavLink>
          <NavLink
            to="/check-status"
            style={{ margin: '0 10px' }}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Check Status
          </NavLink>
        </nav>

        {/* App Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/school-transactions" element={<SchoolTransactions />} />
          <Route path="/check-status" element={<CheckStatus />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


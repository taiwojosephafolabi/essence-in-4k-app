import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/landingPage.js';

import './App.css';

export default function App() {
  const backToLandingPage = () => {
    <Link to='/' />;
  };

  return (
    <Router>
      <Routes>
        <Route
          backToLandingPage={backToLandingPage}
          exact
          path='/'
          element={<LandingPage />}
        />
      </Routes>
    </Router>
  );
}

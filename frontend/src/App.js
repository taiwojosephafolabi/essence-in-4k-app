import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/landingPage.js';
import Enquiry from './pages/enquiry.js';
import About from './pages/aboutPage.js';

import './App.css';

export default function App() {
  const backToLandingPage = () => {
    <Link to='/' />;
  };
  const showEnquiryPage = () => {
    <Link to='./enquiry' />;
  };
  const showAboutPage = () => {
    <Link to='./about' />;
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
        <Route
          showEnquiryPagePage={showEnquiryPage}
          path='/enquiry'
          element={<Enquiry />}
        />
        <Route
          showAboutPage={showAboutPage}
          path='/about'
          element={<About />}
        />
      </Routes>
    </Router>
  );
}
